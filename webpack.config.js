var path = require("path");

var SRC_DIR = "./static";
var JS_SRC_DIR = SRC_DIR + "/js";

var DEST_DIR = "./";

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

module.exports = {
	entry: {
		"app": [
			SRC_DIR + "/css/main.scss",
			JS_SRC_DIR + "/index.js"
		],
	},

	resolve: {
		extensions: ["","scss", ".js", ".jsx"]
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: "babel",
				include: path.resolve(JS_SRC_DIR),
				exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['react', 'es2015']
				}
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass?indentedSyntax&includePaths[]=' + __dirname +  '/node_modules'),
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style", "css")
			},
			{
				test: /\.(png|svg|woff|woff2|ttf|eot)$/,
				loader: "url-loader"
			}
		]
	},

	plugins: [
		new ExtractTextPlugin("./app.css")
	],
	output: {
		path: DEST_DIR ,
		filename: "app.js"
	}
};
