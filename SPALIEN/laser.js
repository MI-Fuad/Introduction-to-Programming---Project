function Laser(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;          //laser radius
  this.deLaser = false; 
 
 //lasers design
  this.show = function() {
    stroke(255,255, 0, 150 + sin(frameCount*0.9) * 255);
    strokeWeight(2);
    fill(118, 205, 255);
    rect(this.x+20, this.y, this.r/4, 25);
  }

/*this function checks if laser hits target
  based on difference between the distance, 
  and sum of their radii*/
  this.bang = function(target) {
    var d = dist(this.x, this.y, target.x, target.y);
    if (d < this.r + target.r) {
      return true; //true when it hits
    } else { 
      return false; //false otherwise
    }
  }
  
   this.puff = function() { 
    this.deLaser = true;
  }

  this.move = function() {
    this.y = this.y - 8;  //y value changes, laser moves up
  }

}