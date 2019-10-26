import React from 'react';

//fucntion 컴포넌트를 class 컴포넌트로 전환
export class Counter extends React.Component {

    state = {
        score: 0,
        name:'aa'
    }

    incrementScore() {
        console.log('increment',this);
        //this.state.score += 1; 안된다.
        // this.setState({score: this.state.score +1}); 동기식
        //this.setState(prevState => {
        //    return {score: prevState.score +1}
        //});

        this.setState(prevState => ({score: prevState.score +1}));
        //비동기식 return 이한줄이라 지울수 있는데 제이슨인지함수인지 몰라서 가로를 감싸주어 생략가능
    }

    render() {
        return(
            <div className="counter">
                <button className="counter-action decrement">-</button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={this.incrementScore.bind(this)}>+</button>
            </div>
        )
    }

}

