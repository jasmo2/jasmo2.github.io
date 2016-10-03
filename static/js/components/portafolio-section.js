import React, {Component} from 'react';

class Portafolio extends Component{
  render(){
    return (
      <section id="portafolio" className="case portafolio">

        <div className="ui grid centered">
          <div className="row headerRow"><h1>Tecnologies and Experience</h1></div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://help-esac.rhcloud.com/es/entrenamiento" className="ui medium image">
              <img src="static/images/project-prometeo.png"/>
            </a>
          </div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://seamos.co/" className="ui medium image">
              <img src="static/images/project-seamos.png"/>
            </a>
          </div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://soulcookies.co/" className="ui medium image">
              <img src="static/images/project-soulcookies.png"/>
            </a>
          </div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://coonatra.herokuapp.com/" className="ui medium image">
              <img src="static/images/project-coonatra.png"/>
            </a>
          </div>
      </div>
    </section>
  )}
}

export default Portafolio;
