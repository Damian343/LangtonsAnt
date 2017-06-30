function Ant(cell) {

  this.cell      = cell;
  //up,right,down,left
  this.direction = [true, false, false, false];
  this.currDir   = round(random(0,3));

  this.changeDirection = function() {
    this.direction[this.currDir] = false;
    
    if (this.cell.getColor()) {
      //signifies black square ant turns left 90 degrees
      if (this.currDir <= 0) { 
        this.currDir = 3;
      } else { 
        this.currDir -= 1;
      }
    } else { 
      //signifies white square ant turns right 90 degrees
      if (this.currDir >= 3) { 
        this.currDir = 0;
      } else { 
        this.currDir += 1;
      }
    }
    
    this.direction[this.currDir] = true;
  }

  this.move = function() {
    
    var neighbors = [];

    var top    = grid[index(this.cell.i  , this.cell.j-1)];
    var right  = grid[index(this.cell.i+1, this.cell.j  )];
    var bottom = grid[index(this.cell.i  , this.cell.j+1)];
    var left   = grid[index(this.cell.i-1, this.cell.j  )];
    
    neighbors.push(top);
    neighbors.push(right);
    neighbors.push(bottom);
    neighbors.push(left);
    
    this.checkIndexes(neighbors); 
  
    //up
    if (this.direction[0]) { this.cell = top;   }
    //right
    if (this.direction[1]) { this.cell = right; }
    //down
    if (this.direction[2]) { this.cell = bottom;}
    //left
    if (this.direction[3]) { this.cell = left;  }
  }
  
  this.checkIndexes = function(neighbors) {
    //checks to see if there are any out of bound cells and sets
    //that direction to false 
    for(i = 0; i < neighbors.length; i++) {
       if(!safeIndex(neighbors[i])){
         deadzoneCount++;
         this.direction[i] = false;
       }
    }
  }

  this.show = function() {
    
    var x = this.cell.i * cellWidth;
    var y = this.cell.j * cellWidth;
    stroke(153);
    fill(255, 0, 0);
    rect(x, y, cellWidth-1, cellWidth-1);  
  }
}