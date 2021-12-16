
const moveRover = (start, commands, obstacle) => {
  
    let x = Number(start[0]), // x
        y = Number(start[1]), // y
        direction = start[2], // direction
        temp;                 // reset on move to hold previous rover coords
        
    let array = new Array(10).fill(null);
    
    // create 2d grid
    let grid = array.map(el => el = new Array(10).fill(null));
    
    // initialize rover at starting coords
    // row & col
    grid[y][x] = 'rover';
    
    
    for (let command of commands) {
      
      // move rover
      if (command === 'M') {
        temp = [y, x];
        
        // removes previous rover position from grid
        grid[y][x] = null;
        
        // move rover based on direciton
        if (direction === 'N') y += 1;
        if (direction === 'E') x += 1;
        if (direction === 'S') y -= 1;
        if (direction === 'W') x -= 1;
        
        // handles moving off grid 
        // if index becomes less or greater than grid length
        if (y > 9) y = 0;
        if (y < 0) y = 9;
        if (x > 9) x = 0;
        if (x < 0) x = 9;
        
        // set rover with new x & y coords
        grid[y][x] = 'rover';
        
        // if obstacle provided and rover lands on obstacle return prev coords
        if (obstacle !== undefined) {
          if (y === Number(obstacle[0]) && x === Number(obstacle[1])) {
            return `${temp[1]}:${temp[0]}:${direction}`;
          }
        }
        
      }
      
      // rotate right
      if (command === 'R') {
        
        if (direction === 'N') {
          direction = 'E';
        } else if (direction === 'E') {
          direction = 'S';
        } else if (direction === 'S') {
          direction = 'W';
        } else {
          direction = 'N';
        }
        
      }
      
      // rotate left
      if (command === 'L') {
        
        if (direction === 'N') {
          direction = 'W';
        } else if (direction === 'E') {
          direction = 'N'
        } else if (direction === 'S') {
          direction = 'E';
        } else {
          direction = 'S';
        }
        
      }
      
    }
    
    return `${x}:${y}:${direction}`;
    
  }
  
  console.log(moveRover('00N', 'MMRMMRMRM') === '1:1:W');
  console.log(moveRover('00N', 'MM') === '0:2:N');
  console.log(moveRover('55N', 'MMMMM') === '5:0:N');
  console.log(moveRover('55N', 'MMMMMLM') === '4:0:W');
  console.log(moveRover('00N', 'MMM', '30') === '0:2:N');
  console.log(moveRover('00N', 'RMLM', '11') === '1:0:N');
  
  