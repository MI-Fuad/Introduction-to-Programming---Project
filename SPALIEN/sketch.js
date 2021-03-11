var nave;       //single ship
var target = []; //array of targets/aliens
var lasers = []; //array of lasers 
var imgs = [];   // array for images 

var state = 0;

//var state = startGame;
var unit = 10;
var score = 0;  
var phase = 0.0; 


function preload() {
  font1 = loadFont('fonts/Ailerons.otf');
  //images 
  imgs[0] = loadImage('images/alien.png');
  imgs[1] = loadImage('images/ship.png');
  imgs[2] = loadImage('images/bg1.jpg');
  imgs[3] = loadImage('images/bg2.jpg')
  //alien2 = loadImage('images/alien2.png');
  
  //sound effects
  laserSound = loadSound('sounds/laserwave.wav');

}

function setup() {
  createCanvas(600, 400);
  nave = new Nave();
  
  var index = 0;
  for (var j = 0; j < 3; j++){  
    for (var i = 0; i < 15; i++) {  // array empty when it starts that's why hardcore value
      target[index++] = new Target(i*30, j*40+40, 10, unit/2, unit/2);
    }
  }
}


function draw() {

  //intial state
  //instruction on how to play
  if(state === 0){
    background(imgs[3]);
    textFont(font1)
    fill(0, 255, 128);
    textSize(80);
    text("SPALIEN", 135, 100);
    fill(255, 255, 0);
    stroke(255,0,0);
    textSize(35);
    text("How to Play:", 180, 170);
    textSize(25);
    text("Move Space-Ship with Arrow Keys", 75, 250);
    text("Shoot at Aliens with spacebar", 90, 285);
    fill(0, 255, 128);
    textSize(30);
    text("Click Mouse to Begin", 115, 350);
  }
  
  if(state === 1){
  
  background(imgs[2]);
  nave.show();
  
  //score 
  textFont(font1)
  textSize(20)
  text("score: " + score, width-500, 20);

/* loop for lasers
   show for how many ever there are */
  for (var l = 0; l < lasers.length; l++) {    
    lasers[l].show();  
    lasers[l].move(); 
  
  //if laser array, hits target array
    for (var j = 0; j < target.length; j++) {
      if (lasers[l].bang(target[j])) {
        score = score + 10;                 //increments score by 10
        target[j].delAlien();              //deletes the alien/target
        lasers[l].puff();                 //gets rid of the target
      }
    }
  }
  
  /*loop to remove 
  laser from the array */
  for (var ll = lasers.length-1; ll >= 0; ll--) {  //walk through the array backwards
    if (lasers[ll].deLaser) {                     //start at end lenght -1, go down by 1 till 0
      lasers.splice(ll, 1); 
    }
  }
  
  /*loop to remove 
  target from the array */
 for (var t = target.length-1; t >= 0; t--){
    if (target[t].eliminAlien) {
      target.splice(t, 1);
    }
  } 
 

  var edge = false;
  for (var i = 0; i < target.length; i++) {
    target[i].show();
    target[i].move();
    if (target[i].x >= width-20 || target[i].x < 0) {
      edge = true;
    }
  }
  
//if edge is true then
  if (edge) {
    for (var te = 0; te < target.length; te++) { //shift all the targets down
      target[te].moveDown();
    }
  }
  
//when ship hits the edge   
  if (nave.x >= width){
     nave.x = 0;
   } else if (nave.x <= 0){
     nave.x = 600;
  } 
  
 }
 
 if (score == 450){
   background(45); 
    fill(106, 149, 173 + sin(frameCount*0.8) * 255);
    textSize(100);
    textAlign(CENTER, CENTER);
    text("YOU WIN!", width / 2, 200);
 }
 
} /*END OF DRAW*/

function mousePressed(){
  if(state === 0){
    state=1;
  }
}

function keyPressed() { 
  if (key === ' ') {
    var laser = new Laser(nave.x, height); //sets the laser wherever the ship is
    lasers.push(laser);
    laserSound.play();
  }
}





