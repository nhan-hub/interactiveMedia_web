//initiate global variables
var spd = 0; 	// speed
var size;		// size

//creating mouse coordinates
var mouseX,mouseY;

$( document ).mousemove(function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY ;
});

//movement function
function move() {

    spd += 0.0001 * mouseX; 	//mouseX movement affects speed
    size = mouseY/5;			//mouseY movement affects size

    var r = 150;         	// radius

    var xcenter = $( window ).width()/2;  	 // window X center
    var ycenter = $( window ).height()/2;  	 // window Y center

    //trig movement creating circle path
    var moveX = ( xcenter + ( r * Math.cos(spd) ) );
    var moveY = ( ycenter + ( r * Math.sin(spd) ) );

    //animate circle using generated variables
    $('.circle').animate({
        top: moveY,
        left: moveX,
        height: size,
        width: size,
    	}, 1, 
    	function() {
      		move();
    	}
    	);
}

//update function
$(document).ready(function() {
    move();
});


