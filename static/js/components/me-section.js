import React, {Component} from 'react';

class Me extends Component{
  render(){
    return (
    <section id="me" className="case me">
      <div className="ui grid centered verticalMeSection">
        <div className="sexteen column row">
        <div className="twelve wide column">
          <span className="ui items">
              <div className="item" id="meImg">
                <div className="ui small image">
                  <img className="ui image mobile except grid" src="./static/images/JaimeFoto.png" height="60" width="60"/>
                </div>
                <div className="content">
                  <a className="header">My name is <i>Jaime Molina</i> </a>
                  <div className="meta">
                    <span>Software Master's Student <br/>And Developer by passion.</span>
                  </div>
                  <div className="description">
                    <p>
                      Developer and Master's student in Software Engineering, which is passioned for software development.

                      A geek-entrepreneur who likes to solve problems through code.  On these years I have learn that the languages are no more than a tools to achieve goals. Thus, I have written on different languages such as Ruby, Elixir, Python, Javascript(NodeJs) and even Swift.

                      The mainly reason to choose this path on my professional life was, the opportunity to learn every day, to create real products every day, which makes me happy.                    </p>
                  </div>
                  <div className="extra">
                    <div className="ui equal width grid">
                      <a className="column ui circular github icon button">
                        <i className="github icon"></i>
                      </a>
                      <a className="column ui circular twitter icon button">
                        <i className="twitter icon"></i>
                      </a>
                      <a className="column ui circular linkedin icon button">
                        <i className="linkedin icon"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </span>
        </div>
        </div>
      </div>
    </section>
  )}
}

export default Me;
