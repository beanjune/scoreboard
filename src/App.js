import React from 'react';
import './App.css';
import {Header} from './components/header';
import {Player} from "./components/player";

class App extends React.Component {

  state = {
    players: [
      {name: 'LJH', score: 100, id: 1},
      {name: 'HONG', score: 45, id: 2},
      {name: 'KCM', score: 15, id:3},
      {name: 'LDK', score: 35, id:4},
    ]
  };

  render() {
    return(
        <div className="scoreboard">
          <Header title="My Scoreboard" tortalPlayers={11}/>
          {/*Player's List*/}
          {
            this.state.players.map(player => <Player name={player.name} score={player.score} id={player.id}
                                                     key={player.id} removePlayer={this.handleRemovePlayer.bind(this)} />)
          }
        </div>
    )
  }

  handleRemovePlayer(id) {
    //삭제로직
    console.log('handleRemovePlayer',id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !=id);
      // return {players: players};
      return {players};
      //가능
    })
  }

}


export default App;
