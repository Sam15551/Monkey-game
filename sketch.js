
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var random;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}

function setup() {
  
  monkey = createSprite(80,315,20,20); 
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup = new Group()
  obstaclesGroup = new Group()
}  

  
function draw() {
    
  background("white")
    if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }   
  monkey.collide(ground);
  
   
stroke("white");
textSize(20);
fill("white");

stroke("black");
textSize(20);
fill("black");
survivalTime = Math.ceil(frameCount/frameRate())
text("Survival Time : " + survivalTime, 100, 50);

food()
obstacles()
  drawSprites() 
}

function food() {
if(frameCount%80===0){
  banana = createSprite(200,Math.round(random(120,200),20,20));
  banana.addImage("bananaImage",bananaImage);
  banana.scale = 0.1;
  banana.setVelocityX=-4;
  banana.lifetime = (100);
  foodGroup.add(banana)
  
 }
}

function obstacles(){
   if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);    
    obstacle.addImage("rock",obstacleImage)
        
    obstacle.velocityX = -(6 + 3*score/100);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}



