import React, {Component} from 'react';

class Portafolio extends Component{
  render(){
    return (
      <section id="portafolio" className="case experiportafolioence">

        <div className="ui grid centered">
          <div className="row headerRow"><h1>Tecnologies and Experience</h1></div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://duckduckgo.com" className="ui medium image">
              <img src="static/images/image.png"/>
            </a>
          </div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://duckduckgo.com" className="ui medium image">
              <img src="static/images/image.png"/>
            </a>
          </div>
          <div className="four wide computer six wide tablet column centered">
            <a href="http://duckduckgo.com" className="ui medium image">
              <img src="static/images/image.png"/>
            </a>
          </div>
      </div>
    </section>
  )}
}

export default Portafolio;
