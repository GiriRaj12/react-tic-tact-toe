import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [arr, setArray] = useState([]);

  const [player, setPlayer] = useState(1);

  const [win, setWin] = useState(false);

  useEffect(() => {
    let array = new Array(3);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        array[i][j] = 0;
      }
    }
    let set = (array) => {
      setArray(array);
    }
    set(array);
  }, [])

  let handleClick = (e) => {
    if (win) {
      return;
    }

    let reformatedArray = getReformattedArray(arr, e, player);
    checkWin(reformatedArray, setWin, setPlayer)
    setArray(reformatedArray);

    if (player === 1) {
      setPlayer(2);
    }
    else {
      setPlayer(1);
    }
  }


  return (
    <div className="App">
      <h2>Tick Tact Toe Game</h2>
      <h4>Player :{' ' + player}'s Turn</h4>
      <h5>Player 1 = O - Player 2 : X</h5>
      <p>{win ? (player + ' Wins') : ''}</p>
      <div className="tick-toe-template">
        {getTemplate(arr, handleClick)}
      </div>
    </div>
  );
}
export default App;


function getTemplate(arr, clickEvent) {
  let key = 0;
  let divs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      divs.push(<div key={getKey(key)} id={getKey(key)} className={getClassName(arr[i][j])} onClick={e => clickEvent(e.target.id)}>
        <p className='player-choise'>{getPlayer(arr[i][j])}</p>
      </div>)
      key++;
    }
  }
  return divs;
}

function getPlayer(number) {
  if (number === 1) {
    return 'O'
  }
  else if (number === 2) {
    return 'X'
  }
  else return ' ';
}

function getKey(key) {
  return String('D-' + key);
}

function getClassName(element) {
  return String(String('tick-tack-toe-element') + ' ' + (element === 1 ? 'dark' : 'light'));
}

function getReformattedArray(arr, e, player) {
  let choise = Number(String(e).slice(-1));
  arr[Math.floor(choise / 3)][(choise + 9) % 3] = player;
  return arr;
}


function checkWin(arr, setWin, setPlayer) {
  
}