import React from 'react';
import {Counter} from "./Counter";
import PropTypes from 'prop-types'


//함수를 선언한 결과물이 와야하기때문에 ()를 하면 안된다.
//this를 독립적으로 존재해 까먹어 this 바인드로 묶어줘야한다. 멕시컬 THIS방법도 있다.
//state 를 변경하는 방법은 setSate밖에 없다.

export class Player extends React.PureComponent{

    static propTypes = { //static 클래스의 속성으로 모든 클래스 공통됨
        name: PropTypes.string,
        id: PropTypes.number,
        score: PropTypes.number,
        removePlayer: PropTypes.func,
        changeScore: PropTypes.func,
    }

    render(){
        console.log(this.props.name,' rendered');

        const {removePlayer,id,name,score,changeScore} = this.props;

        return (
            <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
                {name}
            </span>
                <Counter score={score} id={this.props.id} changeScore={changeScore}/>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 기존 score와 nextProps의 score 가 다르면 true
        return this.props.score !== nextProps.score ? true : false;
    }

}

console.log(Player.propTypes)