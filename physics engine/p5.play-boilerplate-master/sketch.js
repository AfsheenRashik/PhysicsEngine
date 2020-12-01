const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground,ball;
function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();
  myWorld = myEngine.world;

  var ballOptions = {
    restitution:1
  }
  
  ground= Bodies.rectangle(200,380,400,10,{isStatic:true});
  ball = Bodies.circle(200,100,20,ballOptions);
 
  World.add(myWorld,ground);
  World.add(myWorld,ball);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  fill("yellow")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  fill("pink");
  ellipseMode(RADIUS);
  circle(ball.position.x,ball.position.y,20);

 // drawSprites();
}