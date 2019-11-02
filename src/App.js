import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Player} from "./components/Player";
import {AddPlayerForm} from "./components/AddPlayerForm";

let maxId = 4;

class App extends React.Component {

  state = {
    players: [
      {name: 'LJH', score: 1, id: 1},
      {name: 'HONG', score: 2, id: 2},
      {name: 'KCM', score: 3, id: 3},
      {name: 'LDK', score: 4, id: 4},
    ]
  };

  render() {
    return(
        <div className="scoreboard">
          <Header title="My Scoreboard" players={this.state.players}/>
          {/*Player's List*/}
          {
            this.state.players.map(player => <Player name={player.name} score={player.score} id={player.id}
                                                     key={player.id} removePlayer={this.handleRemovePlayer.bind(this)}
                                                     changeScore={this.handleChangeScore.bind(this)}/>)
          }
          <AddPlayerForm addPlayer={this.handleAddPlayer.bind(this)}>
          </AddPlayerForm>
        </div>
    )
  }

    handleRemovePlayer(id) {
        // 삭제 로직
        console.log('handleRemovePlayer: ', id);
        this.setState(prevState => {
            const players = prevState.players.filter(player => player.id !== id);
            return {players};
        })
    }



    handleChangeScore(id, delta) {
        console.log('handleChangeScore:', id, delta);
        this.setState(prevState => {
            // 새로운 배열을 리턴
            // const players = [ ...prevState.players ]
            // players.forEach(player => {
            // 	if (player.id === id) {
            // 		player.score += delta;
            // 	}
            // });
            // return { players };
            const players = prevState.players.map(player => {
                if (player.id === id) {
                    player.score += delta;
                }
                return player
            })
            return { players };
        });
    }

    handleAddPlayer(name){
      console.log('handleAddPlayer:' , name);
      this.setState(preState=> {
          const players = [...preState.players];
          players.push({ id: ++maxId, name:name, score:0});
          return {players}
      });
    }
}


export default App;
