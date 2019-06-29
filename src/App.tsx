import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { GlobalStyled } from './atomic/obj.globals';
import logo from './logo.svg';

function CategoryList() {
  return <h2>Home</h2>;
}

function CotegoryDetail() {
  return <h2>About</h2>;
}

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyled />
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category-detail/">About</Link>
            </li>
          </ul>
        </header>
        <Route path="/" exact component={CategoryList} />
        <Route path="/category-detail/" component={CotegoryDetail} />
      </Router>
    </div>
  );
};

export default App;
