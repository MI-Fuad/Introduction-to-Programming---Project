function Target(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  
  this.eliminAlien = false;
  this.xdir = 1;
  

//move the aliens accross
  this.move = function() {
    this.x = this.x + this.xdir;
  }
  
  this.moveDown = function() { // if targets hit the edge 
    this.xdir *= -1;  //reversing direction of the targets 
    this.y += this.r; //moves down
  }
  
  this.delAlien = function (){
   this.eliminAlien = true; 
  }

  this.show = function() {
    noStroke();
    image(imgs[0], this.x, this.y, this.r*2, this.r*2);
  }
  
}


