import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Me from './me-section'
import Experience from './experience-section'

class App extends React.Component{
        // <Sidebar/>
  render() {
    return (
      <span>
        <Navbar/>
        <div className="container">
          <Me/>
          <Experience/>
        </div>
      </span>
    )
  }
}

export default App;
