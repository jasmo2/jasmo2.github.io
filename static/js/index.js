import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

main();

function main() {
  const app = document.getElementById("app_root")

  ReactDOM.render(<App />, app);
};
