var jx,jy,ix,iy;
var gap = 150;
var nodeNum = 100;
var nodes = [];

function setup(){
  background(0);
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < nodeNum; i++) {
    nodes.push(new Node());
  }
  
}

function draw(){
  background(0);
 
  // set first particles
  for (var i = 0; i < nodes.length; i++) {   
    nodes[i].show();
    nodes[i].update();
    ix = nodes[i].x;
    iy = nodes[i].y;
       
    // secondary particles
    for(var j = 0; j < nodes.length; j++){
      jx = nodes[j].x;
      jy = nodes[j].y;
 
      //connect nodes with line when nodes are within set distance
      if(dist(ix,iy,jx,jy)<gap){
        beginShape();
        stroke(100);
        strokeWeight(0.1);
        line(ix,iy,jx,jy);
        endShape();       
  }}}
        
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
// Creating Node Class Object
function Node() {

    this.x  = random(width);
    this.y  = random(height);
    this.r = random(1, 5);
    this.dx = random(-2,2);  // direction of x
    this.dy = random(-1,1); // direction of y
    this.spd = 2;

  this.update = function() {
    //movement
    this.x = this.x + this.dx*0.5*this.spd;
    this.y = this.y + this.dy*0.5*this.spd;
    
    //bouncing on window condition
    if (this.y > height+10-this.r) this.dy=-1;
    if (this.y < -10  + this.r) this.dy=1;
    
    if (this.x > width+10-this.r) this.dx=-1;
    if (this.x < -10+this.r) this.dx=1;
  }

  this.show = function() {
    push();
    fill(150);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    pop();
  }
}