import React from 'react';
import Grid from './components/Grid'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col]
    this.setState({
      gridFull: gridCopy
    })
  }

  //Seeds cells onto grid
  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++){
      for (let j = 0; j < this.cols; j++){
        if (Math.floor(Math.random() * 4 ) === 1 ){
          gridCopy[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  playButton = () => {
    //calls play function at this.props.speed(every 100ms right now)
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play, this.speed)
  }

  pauseButton = () => {
    clearInterval(this.intervalId);
  }

  play = () => {
    //need 2 copies of grid
    //gridcopy1 is intial state of the grid
    let gridCopy1 = this.state.gridFull
    //gridcopy2 is the changes to the grid(as cells move)
    let gridCopy2 = arrayClone(this.state.gridFull);

    //Game of Life logic
    for (let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        //How many neighbors a cell has
        let neighborCount = 0;
        if ((i > 0) && (gridCopy1[i - 1][j])){
          neighborCount++;
        }
		    if (i > 0 && j > 0 && (gridCopy1[i - 1][j - 1])){
          neighborCount++;
        }
		    if (i > 0 && j < this.cols - 1 && (gridCopy1[i - 1][j + 1])){
          neighborCount++;
        }
		    if (j < this.cols - 1 && (gridCopy1[i][j + 1])){
          neighborCount++;
        }
		    if (j > 0 && (gridCopy1[i][j - 1])){
          neighborCount++;
        }
		    if (i < this.rows - 1 && (gridCopy1[i + 1][j])){
          neighborCount++;
        }
		    if (i < this.rows - 1 && j > 0 && (gridCopy1[i + 1][j - 1])){ 
          neighborCount++;
        }
		    if (i < this.rows - 1 && j < this.cols - 1 && (gridCopy1[i + 1][j + 1])) {
          neighborCount++;
        }
        //If neighborCount is less than 2 and neighborCount is greater than 3 
        //the cell dies and set to false on copy grid2
		    if (gridCopy1[i][j] && (neighborCount < 2 || neighborCount > 3)){ 
          gridCopy2[i][j] = false;
        }
        //If neighborCount is equal to three than a new cell is created and set to true
		    if (!gridCopy1[i][j] && neighborCount === 3){
          gridCopy2[i][j] = true;
        }
      }
    }
    this.setState({
      gridFull: gridCopy2,
      generation: this.state.generation + 1
    })
  }

  componentDidMount(){
    this.seed();
    this.playButton();
  }

  render(){
  return (
    <div className="App">
        <h1>The Game of Life</h1>
        <button onClick={this.playButton}>
          Play  
        </button>
        <button onClick={this.pauseButton}>
          Pause
        </button>
        <Grid 
        gridFull = {this.state.gridFull}
        rows = {this.rows}
        cols = {this.cols}
        selectBox = {this.selectBox}
        />
        <h2>Generations: {this.state.generation} </h2>
    </div>
    );
  }
}

//Creates a deep copy of array(grid) 
function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr));
}

export default App;
