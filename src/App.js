import React, { Component } from 'react';
import './App.css';

/* i want:
  - name
  - link to resume (just downloadable link for now, laidout better)
  - link to github
  - blog
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-header">christine y lee</h1>
          <div className="header__decoration">
            <span className="decoration">
              ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
            </span>
          </div>

        </header>

        <nav className="App-nav">
          <ul className="App-nav-list">
            <li><a href="#">blog</a></li>
            <li><a href="#">resume</a></li>
            <li><a href="#">github</a></li>
            <li><a href="#">linkedin</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;
