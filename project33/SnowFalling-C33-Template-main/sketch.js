function preload(){
  bg=loadImage("snow2.jpg")
  snow1=loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");

}
function setup() {
  createCanvas(1400,700);
}

function draw() {
  background(bg);  
  s1();
  s2();
  drawSprites();
}
function s1(){
  if(frameCount%60 === 0){
    var snow = createSprite(600,5,10,10);
    snow.velocityY = 4;
    snow.x = random(0,1400);
    snow.addImage(snow1);
    snow.scale = 0.25;
  }
 

}
function s2(){
  if(frameCount%150 === 0){
    var snow = createSprite(600,5,10,10);
    snow.velocityY = 4;
    snow.x = random(0,1400);
    snow.addImage(snow2);
    snow.scale = 0.15;
  }
}