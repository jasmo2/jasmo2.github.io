import React, {Component} from 'react';

class Contact extends Component{
  render(){
    return (
      <section id="contact" className="case contact">
        <div className="ui grid centered">
          <div className="sexteen column row">

            <div className="twelve wide column">
              <br/>
              <h1 className="ui header center aligned">
                <span>
                  <i className="volume control phone icon"></i>
                  <div className="content">
                    ¿ Wanna contact me ?
                  </div>
                </span>
              </h1>
            </div>

          </div>

          <div className="twelve wide column">
            <div className="twelve wide column">
              <div className="ui list">
                <div className="item">
                  <i className="users icon"></i>
                  <div className="content">
                    By: <strong>jasmo2</strong>
                  </div>
                </div>
                <div className="item">
                  <i className="marker icon"></i>
                  <div className="content">
                    Bogotá, Colombia
                  </div>
                </div>
                <div className="item">
                  <i className="mail icon"></i>
                  <div className="content">
                    <a href="mailto:jasmo2.com@gmail.com">jasmo2.com@gmail.com</a>
                  </div>
                </div>
                <div className="item">
                  <i className="linkify icon"></i>
                  <div className="content">
                    <a href="https://co.linkedin.com/in/jaime-molina-21592960">linkedin CV</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  }

  export default Contact;
