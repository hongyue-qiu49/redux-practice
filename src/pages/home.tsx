import React from 'react';
import { Counter } from '../features/counter/Counter';
import '../App.css';

interface HomeProps {
  onReduxDemoClick: () => void
  onReactQueryDemoClick: () => void
}
const Home = (
    {onReduxDemoClick, onReactQueryDemoClick}:HomeProps
) => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,
          <a className="App-link" href="#" onClick={onReduxDemoClick}>redux demo</a>
          ,
          <a className="App-link" href="#" onClick={onReactQueryDemoClick}>react query demo</a>
        </span>
      </header>
    </div>
  );
}

export default Home;
