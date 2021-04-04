const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic: true
  }

  ground=Bodies.rectangle(200,380,400,20,options);

  World.add(world,ground);

  var options1={
    restitution: 1.8
  }

  ball=Bodies.circle(200,100,5,options1);

  World.add(world,ball);
  
}

function draw() {  
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,5,5);
  
}