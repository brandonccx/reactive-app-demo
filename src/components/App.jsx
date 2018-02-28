import React from 'react';
import './App.css';
import { AppStatusMap } from '../constants'

const App = props => {
  const status = AppStatusMap[props.status];
  return (
    <div className="App">
      <p>{props.name}</p>
      <b className={`App-status App-status--${status}`}>
        {status}
      </b>
      <button onClick={props.onStart}>Start</button>
      <button onClick={props.onStop}>Stop</button>
      <button onClick={props.onRemove}>Remove</button>
    </div>
  );
};

export default App;
