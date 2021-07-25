var ship, ship_water;
var sea, seapng;
function preload(){

seapng = loadImage("sea.png");
ship_water = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,200);
   

   sea = createSprite(200, 100);
   sea.addImage(seapng);
   sea.scale = 0.2

   ship = createSprite(140, 100, 20, 30);
   ship.addAnimation("flowing", ship_water);
   ship.scale = 0.2;


}

function draw() {
  background("white");
  sea.velocityX = -2;
  if(sea.x <= 0){
    sea.x = sea.width/10;
  }
  
 // ship.collide(sea);
  drawSprites()
 
}