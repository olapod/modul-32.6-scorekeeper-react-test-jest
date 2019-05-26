import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList';
import AddPlayer from './components/AddPlayer'

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [],
   }
 }

generateColor = () => {
  return '#' +  Math.random().toString(16).substr(-6);
}

onScoreUpdate = (playerIndex, scoreChange) => {
  this.setState({
    players: this.state.players.map((player, index) => {
      if (index === playerIndex) {
        return { ...player, score: player.score + scoreChange };
      }
      return player;
    })
  })
}

onPlayerAdd = (playerName) => {
  const newPlayer = {
    name: playerName,
    score: 0,
    backgroundColor: this.generateColor()
  }
  this.setState({
    players: [...this.state.players, newPlayer],
  })
}

onPlayerRemove = (playerIndex) => {
  this.setState({
    players: this.state.players.filter((__,index) => index !== playerIndex)
  })
}

// onPlayerRemove = (i) => {
//   this.setState({
//     players: this.state.players.filter(player => player.index !== i)
//   });
// };


 render() {

  return (
     <div className="App">
       <AddPlayer onPlayerAdd={this.onPlayerAdd} />
       <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove}/>
     </div>
   );
 }
}

export default App;
