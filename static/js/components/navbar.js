import React, {Component} from 'react';
import jQuery from 'jquery'

jQuery.fn.dropdown = require('semantic-ui-dropdown')
jQuery.fn.transition = require('semantic-ui-transition')
jQuery.fn.transition = require('semantic-ui-transition')


class Navbar extends Component {
  componentDidMount(){
    jQuery(this.refs.dropdown).dropdown()
  }
  render(){
    return(
      <div>
        <div className="ui text">
          <h1 className="ui header">Chotaduro</h1>
          <p>Created to make you a happier person. Just drag and drop the items from the menu to begin an awesome history</p>
        </div>

        <div className="ui borderless main menu">
          <div className="ui text container">
            <div href="#" className="header item">
              {
                // <img className="logo" src="assets/images/logo.png"/>
              }
              Project Name
            </div>
            <a href="#" className="item">Blog</a>
            <a href="#" className="item">Articles</a>
              <div className="ui right floated dropdown item" ref="dropdown">
                <div className="text">File</div>
                <i className="dropdown icon"></i>
                <div className="menu">
                  <div className="item">New</div>
                  <div className="item">
                    <span className="description">ctrl + o</span>
                    Open...
                  </div>
                  <div className="item">
                    <span className="description">ctrl + s</span>
                    Save as...
                  </div>
                  <div className="item">
                    <span className="description">ctrl + r</span>
                    Rename
                  </div>
                  <div className="item">Make a copy</div>
                  <div className="item">
                    <i className="folder icon"></i>
                    Move to folder
                  </div>
                  <div className="item">
                    <i className="trash icon"></i>
                    Move to trash
                  </div>
                  <div className="divider"></div>
                  <div className="item">Download As...</div>
                  <div className="item">
                    <i className="dropdown icon"></i>
                    Publish To Web
                    <div className="menu">
                      <div className="item">Google Docs</div>
                      <div className="item">Google Drive</div>
                      <div className="item">Dropbox</div>
                      <div className="item">Adobe Creative Cloud</div>
                      <div className="item">Private FTP</div>
                      <div className="item">Another Service...</div>
                    </div>
                  </div>
                  <div className="item">E-mail Collaborators</div>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
}

export default Navbar ;
