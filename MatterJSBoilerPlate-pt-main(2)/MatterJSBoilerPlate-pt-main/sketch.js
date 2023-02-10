var fundo, fundoImg;
var loira, loiraImg;
var morena, morenaImg;
var bola, bolaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
loiraImg = loadImage("loiraCostas.jpeg");
morenaImg = loadImage("morenaCostas.jpeg");
fundoImg = loadImage ("fundo.jpeg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

 fundo = createSprite(windowWidth -1000, windowHeight - 627 );
 fundo.addImage(fundoImg);
 fundo.scale = 1.30;

loira = createSprite(windowWidth -1300, windowHeight - 427 );
 loira.addImage(loiraImg);
 loira.scale = 0.3;

 morena = createSprite(windowWidth -400, windowHeight - 327 );
 morena.addImage(morenaImg);
 morena.scale = 0.3;



 //loira = createSprite()

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



