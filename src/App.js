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
    const mainLinks = [
      {url: '#', display: 'blog'},
      {url: '#', display: 'resume'},
      {url: 'https://github.com/cyanCYMK', display: 'github'},
      {url: 'https://www.linkedin.com/in/christineylee4', display: 'linkedin'},
    ]
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

        <MainNav links={ mainLinks } />
      </div>
    );
  }
}

const MainNav = (props) => {
  // props.links is array of {url, display}
  return (
    <nav className="main-nav">
      <ul className="nav-list">
        { props.links.map(link => (<li><a href={`${link.url}`}>{link.display}</a></li>)) }
      </ul>
    </nav>
  );
}

export default App;
