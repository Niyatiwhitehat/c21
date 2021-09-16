
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var options={
    isStatict:true
  }
   
  var ball_option={
    restitution:1.0
  }
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_option);
  World.add(world,ball)

ball2=Bodies.rectangle(200,200,50,50,ball_option)
World.add(world,ball2)
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
push ()
  translate(ground.position.x,ground.postion.y)
rotate (angle)
rect (0,0,100,20)
pop ()
angle+= 0.1
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 //rect(ground.position.x,ground.position.y,380,30)


  
  
}

