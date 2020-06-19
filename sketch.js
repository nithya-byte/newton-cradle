var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof=new roof(380,100);
	

	var ground_options={
		isStatic : true
	  }
	ground = Bodies.rectangle(200,500,400,20,ground_options)
  World.add(world,ground);

	

	ball1=new Bob(200,420,40);
	ball2= new Bob(280,420,40);
	var bobDiameter=40;
	
	 chain1=new SlingShot(roof.body,ball1.body,80,0);

	 chain2=new SlingShot(roof.body,ball2.body,120,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("blue");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
fill("red");
 roof.display();
  fill("pink");
 ball1.display();
 drawSprites();
 ball2.display();
 fill("white")
  chain1.display();
 chain2.display();
 
}


  function keyPressed()
  {
	if(keyCode===UP_ARROW){
		
		
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:200,y:200})
		
	}
  }


