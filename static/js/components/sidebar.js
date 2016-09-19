import React, {Component} from 'react';
import jQuery from 'jquery'

jQuery.fn.dropdown = require('semantic-ui-dropdown')
jQuery.fn.transition = require('semantic-ui-transition')
jQuery.fn.transition = require('semantic-ui-transition')

const divSticky = {
  width: "283px !important",
  height: "169px !important"
}

class Sidebar extends Component {
  componentDidMount(){
    jQuery(this.refs.dropdown).dropdown()
  }
  render(){
    return(
        <div className="ui dividing right rail">
          <div className="ui sticky" style={divSticky}>
            <div className="ui segment">
              Left Rail Content
            </div>
          </div>
        </div>
    )
  }
}

export default Sidebar ;
