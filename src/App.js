import React from 'react';
import './App.css'
import {Header} from './components/header';
import {Counter} from './components/counter';


//함수를 선언한 결과물이 와야하기때문에 ()를 하면 안된다.
//this를 독립적으로 존재해 까먹어 this 바인드로 묶어줘야한다. 멕시컬 THIS방법도 있다.
//state 를 변경하는 방법은 setSate밖에 없다.

const Player = (props) => (
    <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
        <Counter score={props.score}/>
    </div>
)
//함수선언문으로 넣어야하기때문에 익명함수로 한번 감싸서 한다.


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
