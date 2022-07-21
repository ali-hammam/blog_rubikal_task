import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';
import BlogRouter from './routes';

function App() {
  return (
    <>
        <BlogRouter />
    {/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" class="btn btn-primary">Primary</button>

      </header>
      </div>*/}
    </>
  );
}

export default App;
