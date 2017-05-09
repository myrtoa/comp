// The statements in the setup() function 
// run once when the program begins
function setup() 
{
  createCanvas(400,400);			//create canvas with dimensions 400x400 pixels
  rectMode(CENTER);				//draw rectangles from the center of the canvas
}

// The statements in draw() are run until the 
// program is stopped. Each statement is run in 
// sequence and after the last line is read, the first 
// line is run again.
function draw() 
{
  background(255); //set white background
  
  // from frame 0 to 15 display circle
  if ((frameCount % 48 >=0) && (frameCount % 48 <=15))
  {
    push();                         //Start a new drawing state
    translate(150, 150); 	    //x,y position in canvas
    rotate(radians(frameCount));    //rotate with radians calculated by framecount number
    fill(202,95,83); 		    //rgb color for the shape drawn
    ellipse(0, 0, 40, 40); 	    //create circle: 0,0 position on canvas, 40,40 dimensions
    pop(); 			    //restore original state
  }
  
  // from frame 16 to 31 display circle
  else if  ((frameCount % 48 >=16) && (frameCount % 48 <=31))
    {
    push(); 			    //Start a new drawing state
    translate(150, 150); 	    //x,y position in canvas
    rotate(radians(frameCount));    //rotate with radians calculated by framecount number
    fill(53,168,129);		    //rgb color for the shape drawn
    rect(0,0,40,40);		    //create square: 0,0 position on canvas, 40,40 dimensions
    pop(); 			    //restore original state
  }
  
  // from frame 32 to 47 display circle
  else  if ((frameCount % 48 >=32) && (frameCount % 48 <=47))
  {
    push();			    //Start a new drawing state
    translate(150, 150);            //x,y position in canvas 
    rotate(radians(frameCount));    //rotate with radians calculated by framecount number
    fill(13,147,185);		    //rgb color for the shape drawn
    triangle(0, 0, 40, 0, 20, 40);   //create triangle: 3 sets of coordinates on the canvas
    pop();			    //restore original state
  }
  
}
