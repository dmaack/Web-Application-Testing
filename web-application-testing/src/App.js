import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

import './App.css';

export const addStrike = (strikes, setStrikes) => {
  if(strikes < 2) {
    return setStrikes(strikes + 1)
  } else if(strikes === 2) {
    // return setStrikes(strikes -2)
    return setStrikes(0)
  }
}



function App()  {
  //intial state
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);
  

  const ballChange = () => {
    if(balls < 3) {
      return setBalls(balls + 1)
    } else if (balls === 3) {
      // return setBalls(balls - 3)
      return setBalls(0)
    }
  }

  const strikeChange = () => {
    if(strikes < 2) {
      return setStrikes(strikes + 1)
    } else if(strikes === 2) {
      // return setStrikes(strikes -2)
      return setStrikes(0)
    }
  }

const foulChange = () => {
  if (strikes < 2) {
    return setStrikes(strikes + 1)
  }
}

const hitChange = () => {
  return (setStrikes(0) || setBalls(0))
}

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>
      <Display balls={balls} strikes={strikes}/>
      <Dashboard ballChange={ballChange} strikeChange={strikeChange} foulChange={foulChange} hitChange={hitChange}/>
    </div>
  );

}


export default App;
