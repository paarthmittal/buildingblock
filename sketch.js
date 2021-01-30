const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

bird1=new Bird(200,200)
ground1=new Ground(600,380,1200,10)
ground2=new Ground(700,200,200,10)
ground3=new Ground(1100,250,200,10)
chain1=new SlingShot(bird1.body,{x:185,y:210})

box1=new Box(720,50,40,40);
box2=new Box(680,50,40,40);
box3=new Box(640,50,40,40);
box4=new Box(760,50,40,40);
box5=new Box(740,20,40,40);
box6=new Box(660,20,40,40);
box7=new Box(680,00,40,40);
box8=new Box(1060,100,40,40);
box9=new Box(1040,200,40,40);
box10=new Box(1080,200,40,40);
box11=new Box(1120,200,40,40);
box12=new Box(1160,200,40,40);
box13=new Box(1120,100,40,40);
box14=new Box(1160,100,40,40);


}

function draw(){
    background(252);
    Engine.update(engine);
    ground1.display()
    ground2.display()
    ground3.display()
    chain1.display()
bird1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()


textSize(24)
text("To launch the bird,drag the bird using the keypad and release to throw it!!",200,100)

}
function mouseDragged(){

    Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
   chain1.display()
   
  
}

function mouseReleased(){
   
chain1.fly();

}