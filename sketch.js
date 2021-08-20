var  ship , ship_R ;
var  sea , sea_R ;

function preload(){
ship_R = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_R = loadImage("sea.png");
}
function setup(){
createCanvas(1475,775);

ship = createSprite(450,450,5,7);
sea = createSprite(450,450,5,7);
sea.velocityX=-5;
ship = addanimation("ship",ship_R);
sea = addImage("sea",sea_R);
}
function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2
  }

drawSprites();

}
















