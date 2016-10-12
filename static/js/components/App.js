import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Me from './me-section'
import Experience from './experience-section'
import Portafolio from './portafolio-section'
import Contact from './contact-section'

class App extends React.Component{
        // <Sidebar/>
  render() {
    return (
      <span>
        <Navbar/>
        <div className="container">
          <Me/>
          <Experience/>
          <Portafolio/>
          <Contact/>
        </div>
      </span>
    )
  }
}

export default App;
