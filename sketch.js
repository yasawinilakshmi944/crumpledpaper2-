var dustbinObj;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  dustbinObj = new Dustbin(1000,550);
  ball=new  PaperBall(80,450);
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  Engine.update(engine);
 
  ground.display();
  dustbinObj.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
if (keyCode=== UP_ARROW) {
  Matter.Body.applyForce(ball.body,ball.body.position,{x:190,y:-195});
}
}

