let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('black');
  x = x + random(-5,5);
   y = y + random(-5,5);
  x = constrain(x,0,400);
    y = constrain(y,0,400);
  if(x > 400){
    x = 400;
  }
  if(x < 0){
    x = 0;
  }
  let distancia;
  distancia = dist(mouseX,mouseY,x,y);
  fill('rgb(0,135,255)');
  circle(mouseX,mouseY,distancia);
  fill('pink');
  //circle( x, y, 10);
  if (distancia < 10) {
    fill('rgb(190,146,245)');
    textSize(24);
    text("Achei!", 200, 200);
    noLoop();
  }
}
