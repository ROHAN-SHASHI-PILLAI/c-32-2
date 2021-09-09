const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var blower,blowerMouth,ball;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create(); 
  world = engine.world; 

 blower=new Blower(700,300,100,50);
 blowerMouth=new BlowerMouth(610,310,80,20);
 ball=new Ball(700,200,30,30);

 button=createButton("Click to blow")
 button.position(700,350);
 button.class("blowButton")
 button.mousePressed(blow);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  blower.show();
  blowerMouth.show();
  ball.show();
}

function blow(){
Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.09});
}


