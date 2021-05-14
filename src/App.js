/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';

import logo from './logo.svg';
import './App.css';


const style = css`
  color: hotpink;
`

function App() {
  return (
    <div className="App">
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
        <div css={style}>
          <p>Emotion</p>
        </div>
      </header>
    </div>
  );
}

export default App;
