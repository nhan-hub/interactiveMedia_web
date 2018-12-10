var jx, jy, ix, iy, kx, ky;
var gap = 200;
var nodeNum = 40;
var nodes = [];
var canvas;
var c;

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
    var scrollpos = Math.abs(floor(event.delta / 50));
    if (c > 100) {
        c = 0;
    } else {
        c += scrollpos;
    }
}

function draw() {
    clear();

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
                        fill(c, 100, 90, 4);
                        vertex(ix, iy);
                        vertex(jx, jy);
                        vertex(kx, ky);
                        endShape();
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
    this.r = random(2, 3);
    this.dx = random(-2, 2); // direction of x
    this.dy = random(-1, 1); // direction of y;
    this.spd = 1;

    this.update = function() {
        //movement
        this.x = this.x + this.dx * 0.5 * this.spd;
        this.y = this.y + this.dy * 0.5 * this.spd;

        //bouncing on window condition
        if (this.y > height + 10 - this.r) this.dy = -1;
        if (this.y < -10 + this.r) this.dy = 1;

        if (this.x > width + 10 - this.r) this.dx = -1;
        if (this.x < -10 + this.r) this.dx = 1;
    }

    this.show = function() {
        push();
        fill(c, 90, 100);
        noStroke();
        ellipse(this.x, this.y, this.r, this.r);
        pop();
    }
}