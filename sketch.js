
var PLAY=1;
var END=0;
var gamestate=PLAY;
var monkey ;
var monkeyrunning;

var bananaimage;
var obstacle;
var obstacleimage;
var foodgroup;
var score;
var score1
var ground;
var inisiblegroud;
var b;
var bimage;
var ogroup;
var bgroup;
var mi;
var restart;
var rimage;
var obImage;
var restart;
var restartImage
function preload(){
  
  
  monkeyrunning =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 bimage=loadImage("jungel.jpg");
  obImage=loadImage("obstacle.png");
  score=0
  score1=0;
  restartImage=loadImage("hy.png");
}



function setup() {
   createCanvas(windowWidth, windowHeight);

    monkey =createSprite(width-700,300,10,10)
monkey.addAnimation("running",monkeyrunning);
monkey.scale=0.2
ground=createSprite(width-500,height-50,width*2,10);

ground.visible=false;
    ogroup=createGroup();
  bgroup=createGroup();
  restart=createSprite(width/2,height/2);
  restart.addImage("present",restartImage);
  restart.visible=false;
}


function draw() {
background(bimage);

  if(gamestate===PLAY){
    restart.visible=false;
  bannana();
obs();
  monkey.velocityY=monkey.velocityY+0.8
  if(touches.length>1||keyDown("space") && monkey.y>=height-150){
monkey.velocityY=-24;  
   touches=[];
    touchEnded();
  }
    if(monkey.isTouching(bgroup)){
bgroup.destroyEach();
    score1=score1+10 
  }
  monkey.collide(ground);
     if(monkey.isTouching(ogroup)){
      gamestate=END
     }
  }
  else if(gamestate===END){
        monkey.velocityX=0;
    restart.visible=true

    monkey.velocityY=0;
    monkey.collide(ground)
    ogroup.setLifetimeEach(-1);
    bgroup.setLifetimeEach(-1);
    ogroup.setVelocityXEach(0);
    bgroup.setVelocityXEach(0);
   score=0;
    score1=0;
    frameCount=0;
    if(mousePressedOver(restart)){
reset();
    }
    
    if(touches.length>0 || keyDown("SPACE")) {      
      reset();
      touches = []
    }
  }
  
  drawSprites();
  textSize(20);
textStyle(BOLD);
  fill("black")
stroke("pink");
strokeWeight(15)
text("Survival Time:"+score,width/2,height-500);
score=Math.ceil(frameCount/5)
  
  
  
  textSize(20);
  textStyle(BOLD);
  fill("black");
  stroke("yellow");
  strokeWeight(15);
  text("Points-"+score1,width/2,height-450)
}
function reset(){
gamestate=PLAY;
  score=0;
  score1=0;
  bgroup.destroyEach();
  ogroup.destroyEach();
}
function bannana (){
  if(frameCount%150===0){
    var ban =createSprite(width-150,200,10,10);
    ban.velocityX=-(8+score/10);
    ban.y=Math.round(random(200,380));
    ban.addImage("display",bananaImage);
    ban.scale=0.1;
    ban.lifetime=400;
    bgroup.add(ban);

  }
}
function obs(){
  if(frameCount%100===0){
    var o =createSprite(width-50,height-100,10,10);
   o.velocityX=-(8+score/30)
    o.debug=true;
    o.setCollider("circle",0,0,200)
    o.addImage("apply",obImage)
    o.scale=0.3;
    o.lifetime=400;
ogroup.add(o);
  }
}






