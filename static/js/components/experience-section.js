import React, {Component} from 'react';

class Experience extends Component{
  render(){
    return (
      <section id="experience" className="case experience">

        <div className="ui centered grid">
          <div className="row headerRow"><h1>Experience Section</h1></div>

          <div className="sixteen wide tablet eight wide computer column">
            <div className="ui tiny images">
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
            </div>
          </div>
          <div className="sixteen wide tablet eight wide computer column">
            <div className="ui tiny images">
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
              <img className="ui image" src="./static/images/image.png"/>
            </div>
        </div>
        <div className="sixteen wide tablet eight wide computer column">
          <div className="ui tiny images">
            <img className="ui image" src="./static/images/image.png"/>
            <img className="ui image" src="./static/images/image.png"/>
            <img className="ui image" src="./static/images/image.png"/>
            <img className="ui image" src="./static/images/image.png"/>
          </div>
        </div>



      </div>
    </section>
  )}
}

export default Experience;
