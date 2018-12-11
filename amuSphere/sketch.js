var jx, jy, ix, iy, kx, ky;
var gap = 200;
var nodeNum = 30;
var nodes = [];
var canvas;
var c;
var spd = 1;

function setup() {
    colorMode(HSB, 100);
    c = floor(random(0, 100));
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style("top", "0");
    canvas.style("left", "0");
    canvas.style("z-index", "-1");

    for (var i = 0; i < nodeNum; i++) {
        nodes.push(new Node());
    }

}

function mouseWheel(event) {
    var scrollpos = Math.abs((event.delta / 500));
    if (spd >= 5) {
        spd = 1           ;
    } else {
        spd += scrollpos;
        print(spd);
    }
}

function draw() {

    clear();

    fill(55, 80, 40, 20);
    ellipse(mouseX,mouseY,30,30);
    ellipse(mouseX,mouseY,50,50);
    // background(50,1,2);
    // set first particles
    for (var i = 0; i < nodes.length; i++) {
        nodes[i].show();
        nodes[i].update();
        ix = nodes[i].x;
        iy = nodes[i].y;
  

        // secondary particles
        for (var j = 0; j < nodes.length; j++) {
            jx = nodes[j].x;
            jy = nodes[j].y;

            if (dist(ix, iy, jx, jy) < gap) {

                //third particles
                for (var k = 0; k < nodes.length; k++) {
                    kx = nodes[k].x;
                    ky = nodes[k].y;

                    if (dist(jx, jy, kx, ky) < gap) {
                        beginShape(TRIANGLES);
                        noStroke();
                        fill(55, 80, 40, 4);
                        vertex(ix, iy);
                        vertex(jx, jy);
                        vertex(kx, ky);
                        endShape();
                       
                        if (dist(kx, ky, mouseX, mouseY) < gap){
                          beginShape(TRIANGLES);
                          noStroke();
                          fill(90, 80, 40, 4);
                          vertex(jx, jy);
                          vertex(kx, ky);
                          vertex(mouseX, mouseY);
                          endShape();
                        }
                    }
                }
            }
        }
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
// Creating Node Class Object
function Node() {

    this.x = random(width);
    this.y = random(height);
    this.r = 1;
    this.dx = random(-2, 2); // direction of x
    this.dy = random(-1, 1); // direction of y;
  

    this.update = function() {
        //movement
        this.x = this.x + this.dx * 0.5 * spd;
        this.y = this.y + this.dy * 0.5 * spd;


        //bouncing on window condition
        if (this.y > height + 10 - this.r) this.dy = -1;
        if (this.y < -10 + this.r) this.dy = 1;

        if (this.x > width + 10 - this.r) this.dx = -1;
        if (this.x < -10 + this.r) this.dx = 1;
    }

    this.show = function() {
        push();
        fill(52, 90, 100);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
        pop();
    }
}