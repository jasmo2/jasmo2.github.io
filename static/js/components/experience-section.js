import React, {Component} from 'react';

class Experience extends Component{
  render(){
    return (
      <section id="experience" className="case experience">

        <div className="ui grid centered">
          <div className="row headerRow"><h1>Tecnologies and Experience</h1></div>

          <div className="sixteen wide tablet eight wide computer column centered technologies">
            <div className="ui tiny images">
              <img className="ui image" src="./static/images/ReactJS.png"/>
              <img className="ui image" src="./static/images/Angular.png"/>
            </div>
            <div className="ui tiny images">
              <span className="ui tag labels">
                <span className="ui label">
                  ReactJS
                </span>
                <span className="ui label">
                  AngularJS – 1.X
                </span>
              </span>
            </div>
          </div>
          <div className="sixteen wide tablet eight wide computer column centered technologies">
            <div className="ui tiny images">
              <span>
                <img className="ui image" src="./static/images/Python.png"/>
              </span>
              <span>
                <img className="ui image" src="./static/images/Elixir.png"/>
              </span>
            </div>
            <div className="ui tiny images">
              <span className="ui tag labels">
                <span className="ui label">
                  Python
                </span>
                <span className="ui label">
                  Elixir
                </span>
              </span>
            </div>
        </div>
        <div className="sixteen wide tablet eight wide computer column centered technologies">
          <div className="ui tiny images">
            <img className="ui image" src="./static/images/jQuery.png"/>
            <img className="ui image" src="./static/images/js-logo.png"/>
          </div>
          <div className="ui tiny images">
            <span className="ui tag labels">
              <span className="ui label">
                jQuery<br/>
                $
              </span>
              <span className="ui label">
                Vanilla Javascript <br/>
              (  <i className="heart icon"> ES6</i>)
              </span>
            </span>
          </div>

        </div>
        <div className="sixteen wide tablet eight wide computer column centered technologies">
          <div className="ui tiny images">
            <img className="ui image" src="./static/images/NodeJS.png"/>
            <img className="ui image" src="./static/images/Ruby.png"/>
          </div>
          <div className="ui tiny images">
            <span className="ui tag labels">
              <span className="ui label">
                NodeJS
              </span>
              <span className="ui label">
                Ruby
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )}
}

export default Experience;
