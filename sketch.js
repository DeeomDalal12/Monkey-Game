
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstaclesGroup;
var spawnFood, spawnObstacles;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(80, 315, 20, 20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(monkey.y);
  
  FoodGroup= new Group();
  obstaclesGroup= new Group();
}


function draw() {
  background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")&&monkey.y>=314){
    monkey.velocityY=-16;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  if(monkey.isTouching(obstaclesGroup)){
    obstaclesGroup.setLifetimeEach(-1);
    FoodGroup.setLifetimeEach(-1);
    obstaclesGroup.setVelocityXEach(0);
    FoodGroup.setVelocityXEach(0);
    ground.velocityX=0;
    monkey.velocityY=0;
    survivalTime=0;
  }
  stroke("white");
  textSize(20);
  fill("white");
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  spawnFood();
  spawnObstacles();
  drawSprites();
}
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(400,Math.round(random(120,200)));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-4;
    banana.lifetime=100;
    FoodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,330);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-4;
    obstacle.lifetime=100;
    obstaclesGroup.add(obstacle);
  }
}





