
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basket, paper;

function preload(){}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper= new Paper(150,400,20);
	basket1= new Dustbin(650,640,20,100);
	basket2= new Dustbin(570,660,150,20);
	basket3= new Dustbin(500,640,20,100);
	ground = new Ground(400,680,800,20);
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  basket1.display();
  basket2.display();
  basket3.display();
  
  ground.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:55,y:-55});
	}
}
