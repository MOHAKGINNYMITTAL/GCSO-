  var wall;
  var car;
  var car2;
  var car3;
  var car4;
  var wall2;
  var wall3;
  var wall4;
  
  
  
  function setup() {
  createCanvas(800,400);
  wall=createSprite(700,50,20,40);
  wall2=createSprite(700,150,20,40);
  wall3=createSprite(700,250,20,40);
  wall4=createSprite(700,350,20,40);
  car=createSprite(100,50,10,10);
  car2=createSprite(100,150,10,10);
  car3=createSprite(100,250,10,10);
  car4=createSprite(100,350,10,10);
}

function draw() {
  background("black");  
  car.velocityX=2;
  car2.velocityX=2;
  car3.velocityX=2;
  car4.velocityX=2;
  if (car.isTouching(wall)||car2.isTouching(wall2)||car3.isTouching(wall3)||car4.isTouching(wall4)){
    car.velocityX=0;
    car2.velocityX=0;
    car3.velocityX=0;
    car4.velocityX=0;
    fill="red";
  }
  drawSprites();
}