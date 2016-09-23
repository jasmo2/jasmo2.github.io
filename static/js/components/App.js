import React from 'react';
import Navbar from './navbar'
import Sidebar from './sidebar'
import Me from './me-section'

class App extends React.Component{
        // <Sidebar/>
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Me/>
        </div>
      </div>
    )
  }
}

export default App;
