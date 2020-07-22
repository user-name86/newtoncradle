
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,roof1;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background(255);

	
	
    
	//Create the Bodies Here.
	engine = Engine.create();
	world = engine.world;
	bob1 = new Bob(150,200,90);
	bob2 = new Bob(200,400,90);

	roof1 = new Roof(10,650,800,20);

	var options ={
		bodyA: bob1.body,
		bodyB: bob2.body,
		stiffness:0.4,
		length: 190
	}

	var constraint = Constraint.create(options);
	World.add(world,constraint);

	
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  fill(255,192,203);
  
  line(bob1.body.position.x+45,bob1.body.position.y,bob2.body.position.x-45, bob2.body.position.y)
  fill(0);
  stroke(10);
  drawSprites();
 
}



