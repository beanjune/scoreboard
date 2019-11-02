import React from 'react';
import PropTypes from 'prop-types';

//fucntion 컴포넌트를 class 컴포넌트로 전환
export class Counter extends React.Component {

    incrementScore = (delta) => {
        console.log('increment',this);
        //this.state.score += 1; 안된다.
        // this.setState({score: this.state.score +1}); 동기식
        //this.setState(prevState => {
        //    return {score: prevState.score +1}
        //});

        //this.setState(prevState => ({score: prevState.score +1}));
        //비동기식 return 이한줄이라 지울수 있는데 제이슨인지함수인지 몰라서 가로를 감싸주어 생략가능

        this.props.changeScore(this.props.id,delta);

    }

    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={ () => this.incrementScore(-1)}>-</button>
                <span className="counter-score">{this.props.score}</span>
                <button className="counter-action increment" onClick={ () => this.incrementScore(+1)}>+</button>
            </div> /*함수선언문이 와야하기때문에 함수문은 랩핑*/
        )
    }

}

Counter.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.number,

}

