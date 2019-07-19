import React from 'react'
import '../App.css';

class Rules extends React.Component{
    render(){
        return(
            <div className="rules">
                <h2>Rules</h2>
                <ol>
                    <li>
                    Any live cell with fewer than two live neighbours dies (referred to as underpopulation or exposure)
                    </li>
                    <li>
                    Any live cell with more than three live neighbours dies (referred to as overpopulation or overcrowding).
                    </li>
                    <li>
                    Any live cell with two or three live neighbours lives, unchanged, to the next generation.
                    </li>
                    <li>
                    Any dead cell with exactly three live neighbours will come to life.
                    </li>
                </ol>
            </div>

        )
    }
}

export default Rules
