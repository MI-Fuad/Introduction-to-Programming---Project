function Nave() {
  this.x = width/2; //places the ship in the middle 
  this.xdir = 0;
  this.r = 10;

  this.show = function() {
    image(imgs[1], this.x, height-45, 45, 45);
  
    //move the ship
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x += -5;
    }
  }

  /*this.DED = function(target) {
    var d = dist(this.x, this.y, target.x, target.y);
    if (d < this.r + target.r) {
      return true; //true when it hits
    } else { 
      return false; //false otherwise
    }
  }*/

}