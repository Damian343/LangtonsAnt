//Damian Hamilton

var cols, rows;
var cellWidth = 50;

var grid = [];
var ants = [];
var antCount = 4;
//keeps track of holy many invalid spaces are around ant
var deadzoneCount = 0;

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight);
  
  cols = floor(width/cellWidth);
  rows = floor(height/cellWidth);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  for(var i = 0; i < antCount; i++) {
     var x = round(random(0, cols-1));
     var y = round(random(0, rows-1));
     ant = new Ant(grid[index(x, y)]);
     ants.push(ant);
  }
}

function draw() {
  
  background(255);
  
  ants.forEach(function(ant) {
      ant.move();
      //ensures that if ant is in the corner of the grid
      //it will not change the color of the cell
      //thereby the ant wont rotate between the two invalid grid indexes
      if(deadzoneCount < 2){ ant.cell.changeColor(); }
      ant.changeDirection();
      deadzoneCount = 0;
      ant.show();
  });

  grid.forEach(function(cell) {
     cell.show(); 
  });
}


function safeIndex(cell) {

  if(cell){
    if(cell.i < cols && cell.i >= 0 && cell.j < rows && cell.j >= 0) { 
      return true;
    }
  } else { return false; }
}

function index(i, j) {

  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
    return -1;
  }
  return i + j * cols;
}