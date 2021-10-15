var ship,shipMoving
var sea,seaImg
function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(400,400);
  ship.addAnimation("moving",shipMoving);
  ship.scale = 0.4
  ship.velocityX = -5
  sea = createSprite(500,200);
  sea.addImage("sea",seaImg);
  sea.scale = 0.4;

  sea.depth = ship.depth;
  ship.depth = ship.depth + 1;
}

function draw() {
  background("White");
  if(ship.x <= -50){
    ship.x = 420
  }
  drawSprites();
}