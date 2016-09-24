import React, {Component} from 'react';
import jQuery from 'jquery';

jQuery.fn.dropdown = require('semantic-ui-dropdown');
jQuery.fn.transition = require('semantic-ui-transition');
jQuery.fn.transition = require('semantic-ui-transition');
jQuery.fn.visibility = require('semantic-ui-visibility');


class Navbar extends Component {
  componentDidMount(){
    // jQuery(this.refs.mainMenu).visibility({
    //        type: 'fixed'
    //  });
  }
  render(){
    return(
      <div className="ui borderless main menu" ref="mainMenu" id="portafolioNav">
        <div className="ui text container">
          <a href="#me" className="header item">
            How am I?
          </a>
          <a href="#profile" className="item">Profile</a>
          <a href="#experience" className="item">Tecnologies and Experience</a>
          <a href="#portafolio" className="item">Portafolio</a>
          <a href="#contact" className="item">Contact</a>
        </div>
      </div>
    )
  }
}

export default Navbar ;
