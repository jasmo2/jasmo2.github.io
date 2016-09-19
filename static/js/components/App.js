import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'

class App extends React.Component{
        // <Navbar/>
        // <Sidebar/>
  render() {
    return (
      <div className="main container">
        <div className="ui segment">
          <div className="ui segment">
            <div className="ui right internal dividing rail">
                Right Rail Content
            </div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="ui sixteen column grid container">
          <div className="ui ten wide centered column">
            <h2 className="ui centered header">Hello React, Webpack, Semantic!</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
