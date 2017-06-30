function Cell(i,j) {
  
  this.hu= random(255);
  this.i = i;
  this.j = j;
  this.black = false;

  this.changeColor = function() {
    
    this.black ? this.black = false : this.black = true; 
  }
  
  this.getColor = function() {
    
    return this.black;
  }
  
  this.show = function() {
    
    colorMode(HSB);
    var x = this.i*cellWidth;
    var y = this.j*cellWidth;
    
    if (this.black) {
        fill(this.hu, 255, 255);
    } else {
      stroke(255);
      noFill();
    }
    rect(x, y, cellWidth, cellWidth);
  }
  
}