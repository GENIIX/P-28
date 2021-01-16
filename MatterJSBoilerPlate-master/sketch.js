
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeIMG,mangoIMG,stoneIMG;
var world,engine;

function preload()
treeIMG=loadImage("tree.png");
mangoIMG=loadImage("mango.png");
stoneIMG=loadImage("stone.png");
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     ground=new Ground(400,685,800,12);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();



}



