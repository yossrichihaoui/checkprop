import React from 'react'
import players from './Players';
import Player from './player';

function Playerlist() {
  return (
    <div>
      {
        players.map( e =>
      <Player play={e}/>
        )
      }
    </div>
  )
}

export default Playerlist