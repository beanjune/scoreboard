import React from 'react';

export class AddPlayerForm extends React.Component {
    textInput = React.createRef(); //초기화

    handleSubmit(e){
        e.preventDefault();//기본동작을 막아줌

        const player = document.getElementById('player');
        if (!player.validity.valid){ //reuired 속성이 있어야함
            alert('player is not valid')
            return
        }

        this.props.addPlayer(this.textInput.current.value);

        e.currentTarget.reset(); //폼 초기화
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
                <input id="player" className="input" type="text" placeholder="enter a player's name" required
                       onChange={this.handleValueChange} ref={this.textInput}
                />
                <input className="input" type="submit" value="Add Player"></input>
            </form>
        );
    }
}
