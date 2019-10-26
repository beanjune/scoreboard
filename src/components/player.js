
import React from 'react';
import {Counter} from "./counter";


//함수를 선언한 결과물이 와야하기때문에 ()를 하면 안된다.
//this를 독립적으로 존재해 까먹어 this 바인드로 묶어줘야한다. 멕시컬 THIS방법도 있다.
//state 를 변경하는 방법은 setSate밖에 없다.


export const Player = (props) => (
    <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>
        <Counter score={props.score}/>
    </div>
)
//함수선언문으로 넣어야하기때문에 익명함수로 한번 감싸서 한다.

