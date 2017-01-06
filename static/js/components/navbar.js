import React, {Component} from 'react';
import jQuery from 'jquery';

jQuery.fn.dropdown = require('semantic-ui-dropdown');
jQuery.fn.transition = require('semantic-ui-transition');
jQuery.fn.transition = require('semantic-ui-transition');
jQuery.fn.visibility = require('semantic-ui-visibility');
var navstyle = {
  color: 'white',
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

class Navbar extends Component {
  componentDidMount(){
    jQuery('.ui.vertical.menu').toggle();
    jQuery('.right.menu.open').on("click",function(e){
       e.preventDefault();
       jQuery('.ui.vertical.menu').toggle();
     });
  }
  render(){
    return(
      <div className="ui grid navbargrid cero mleft mrigth" id="main-navbar">
        <div className="computer tablet only row">
          <div className="ui navbar-color fixed menu navbar page grid">
            <a href="" className="brand item item-color">Jasmo2</a>
            <a href="#me" className="header item">
              How am I?
            </a>
            <a href="#experience" className="item item-color">Tecnologies and Experience</a>
            <a href="#portafolio" className="item item-color">Portafolio</a>
            <a href="#contact" className="item item-color">Contact</a>
          </div>
        </div>
        <div className="mobile only row">
            <div className="ui fixed navbar-color navbar menu">
                <a href="" className="brand item">Jasmo2</a>
                <div className="right menu open">
                    <a href="" className="menu item">
                        <i className="content icon"></i>
                    </a>
                </div>
            </div>
            <div className="ui vertical navbar menu">
                <a href="#me" className="header item">
                  How am I?
                </a>
                <a href="#profile" className="item">Profile</a>
                <a href="#experience" className="item">Tecnologies and Experience</a>
                <a href="#portafolio" className="item">Portafolio</a>
                <a href="#contact" className="item">Contact</a>
            </div>
        </div>
      </div>



    )
  }
}
      // <div className="ui borderless main menu" ref="mainMenu" id="portafolioNav">
      //   <div className="ui text container">
      //     <a href="#me" className="header item">
      //       How am I?
      //     </a>
      //     <a href="#profile" className="item">Profile</a>
      //     <a href="#experience" className="item">Tecnologies and Experience</a>
      //     <a href="#portafolio" className="item">Portafolio</a>
      //     <a href="#contact" className="item">Contact</a>
      //   </div>
      // </div>

export default Navbar ;
