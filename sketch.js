var ship, ship_water;
var sea, seapng;
function preload(){
ship_water.loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seapng.loadImage("sea.png");
}

function setup(){
  createCanvas(600,200);
   ship = createSprite(50, 160, 20, 30);
   sea = createSprite(200, 350, 400, 10);
   ship.addAnimation("flowing", ship_water);
   ship.scale = 0.5;
   sea.addImage(seapng);

}

function draw() {
  background("white");
  sea.velocityX = -2;
  if(sea.x <= 100){
    sea.x = sea.width/2;
  }
  
  ship.collide(sea);
 
}