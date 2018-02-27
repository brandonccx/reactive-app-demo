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
      <button onClick={props.onStart}>start</button>
    </div>
  );
};

export default App;
