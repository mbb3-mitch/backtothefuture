var img;  // Declare variable 'img'.
var offset = 10;
function setup() {
createCanvas(2048, 1538);

 img = loadImage("https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/donald-trump-discours-ag-onu.jpg");  // Load the image

}

function draw() {
  // Displays the image at its actual size at point (0,0)
  tint(255, 0, 0, 255); 
 image(img, offset, 0);
tint(0, 255, 255, 126); 
 image(img, 0, offset);

}