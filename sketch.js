function setup() {

createCanvas(400,400);
rectMode(CENTER);
}

function draw() {
 background(255);
 
 if (frameCount <16 ){
  // display circle
   push();
		translate(150, 150);
		rotate(radians(frameCount));
		fill(202,95,83)
		ellipse(0, 0, 40, 40);
	pop(); 
 }
 else if (frameCount >=16 &&  frameCount <32 ){
	//display square
 push();
 translate(150, 150); 
rotate(radians(frameCount));
fill(53,168,129);
rect(0,0,40,40);
pop();
 }

else if (frameCount >=32 &&  frameCount <48 ){
	//display triangle
 push();
 translate(150, 150); 
rotate(radians(frameCount));
fill(13,147,185);
triangle(0, 0, 40, 0, 0, 40);
pop();
 }
 
 print(frameCount);
 //reset - clear screen
if (frameCount == 48){
   remove();
 }

  
}
