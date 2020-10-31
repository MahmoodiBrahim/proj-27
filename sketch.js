
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2,height/4,240,20)
bob1 = new Bob(720,700,40) 
bob2  = new Bob(760,700,40) 
bob3  = new Bob(800,700,40) 
bob4  = new Bob(840,700,40) 
bob5 = new Bob(880,700,40) 

constraint1=
{bodyA:bob1.body, 
	bodyB:roof1.body,
	 stiffness :0.04, }

	 constraint2=
	 {bodyA:bob2.body, 
		 bodyB:roof1.body,
		  stiffness :0.04, }
	 
		  constraint3=
		  {bodyA:bob3.body, 
			  bodyB:roof1.body,
			   stiffness :0.04, }
constraint4=
{bodyA:bob4.body, 
	bodyB:roof1.body,
	 stiffness :0.04, }  

	 constraint5=
{ bodyA:bob5.body, 
	bodyB:roof1.body,
	 stiffness :0.04, }
	 var pendulum1=Constraint.create(constraint1)
	 World.add(world, pendulum1); 

	 var pendulum2=Constraint.create(constraint2)
World.add(world, pendulum2); 

var pendulum3=Constraint.create(constraint3)
World.add(world, pendulum3); 

var pendulum4=Constraint.create(constraint4)
World.add(world, pendulum4); 

var pendulum5=Constraint.create(constraint5)
World.add(world, pendulum5);

}

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine); 
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display() ; 
  line(bob1.body.position.x,bob1.body.position.y,roof1.body.position.x-80,roof1.body.position.y);
  line(bob2.body.position.x,bob2.body.position.y,roof1.body.position.x-40,roof1.body.position.y);
  line(bob3.body.position.x,bob3.body.position.y,roof1.body.position.x,roof1.body.position.y);
  line(bob4.body.position.x,bob4.body.position.y,roof1.body.position.x+40,roof1.body.position.y);

  
  line(bob5.body.position.x,bob5.body.position.y,roof1.body.position.x+80,roof1.body.position.y);

  
  
  
  drawSprites();
 
}
function keyPressed()
 { if (keyCode === UP_ARROW)
	 { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } }



