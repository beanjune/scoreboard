import React from 'react';

export const Stats = (props) => {
    const totalPlayers = props.players.length; // 계산
    let totalScore = 0; // 계산
    props.players.forEach(player => totalScore += player.score)

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
            </tr>
            <tr>
                <td>Total Players:</td>
                <td>{totalScore}</td>
            </tr>
            </tbody>
        </table>
    );
}