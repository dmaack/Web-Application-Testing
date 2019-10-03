import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

class App extends React.Component  {
  constructor(){
    super();
    this.state = {
      ballCount: 0,
      strikeCount: 0
    }
  }

  // const [ballValue, setBallValue] = useState(0);
  // const [strikeValue, setStrikeValue] = useState(0);

render() {
  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <Display />
      <Dashboard />
    </div>
  );
}
}


export default App;
