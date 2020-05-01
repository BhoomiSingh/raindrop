var letters = "bhoomi";
var Drops = [];

function setup() {
  createCanvas(800,400);
  //drop = new Drop();
  for(var i = 0 ; i<100; i++){
    Drops[i] = new Drop();
  }
}

function draw() {
  background(0);  
  
 // drop.fall();
 //drop.display();
  for(var i =0; i <100; i++){
    Drops[i].display();
    Drops[i].fall();
  }
}