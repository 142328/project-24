
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 670);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	paper = new Paper(100,656);

  box1Sprite=createSprite(900,656,150,10,{isStatic:true});
	box1Sprite.shapeColor=color(100)

	box2Sprite=createSprite(820,height-68,10,120,{isStatic:true});
	box2Sprite.shapeColor=color(100)

	box3Sprite=createSprite(980,height-68,10,120,{isStatic:true});
	box3Sprite.shapeColor=color(100)


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();

  drawSprites();
 
}

function keyPressed()
{
  if(keyCode ===UP_ARROW)
  {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:157})
  }
}


