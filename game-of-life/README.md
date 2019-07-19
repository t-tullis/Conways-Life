In Conway's Game of Life, each cell is either dead or alive, also referred to as state being on or off(true/false). Every cell will interact with its 8 neighbors.
Where the 4 rules come into play:
1. A live cell with less than two live neighbors dies.
2. A live cell with two or three neighbors lives on to the next generation.
3. A live cell with more than tree neighbors dies(overpopulation).
4. A dead cell with exactly three neighbours is reborn and becomes a live cell.

When the game starts the above rules are applied and will update the state of the grid for the next generation. We evaluate the live cells and their neighbors to know which state they will be in the next generation.

The initial step is to start with the set up of the grid, which in my case this was just setting up a grid in react using divs and mapping to create rows and columns. Once the grid was complete we move onto the logic of the game. In order to randomize the cells that are initialized, I used nested for loops and randomized the cells that were going to start off in the "live/true" state.

When we start analyzing the individual cells to look at their neighbors, we want to get the x, y coordinates to help us locate the live and dead cells in relation to each cell. As per the rules, if were looking at cell x, we want to analyze the current gen of the eight surrounding cells and implement the correct logic to know whether the neighboring cells will "die" or "reproduce".  I created a 2d array to keep the position of the cells and used a seed function to randomly seed cells on to the grid, and once play is clicked our play function runs and the game logic is implemented determining live or dead cells. The grid state will run every iteration at 150ms (determining the speed you choose if fast is clicked it will run every 75ms and if slow is clicked then it will run every 1000ms).
When seed is clicked it randomly seeds cells on the board in different locations, we can pause and play. I also added a feature if cells get stuck you can actually click on the grid and add a cell to continue. 
