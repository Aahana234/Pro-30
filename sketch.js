const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot,ball;
var stand1, stand2;
var polygon;
function preload(){
polygonImage = loadImage("polygon.png")

}


function setup(){
var canvas = createCanvas(1200,900);
engine = Engine.create();
world = engine.world;
//create a ground
ground = new Ground(600,600,1200,20);


//level one 

block1 = new Block(750,470);
block2 = new Block(800,470);
block3 = new Block(850,470);
block4 = new Block(800,420);
block5 = new Block(750,420);
block6 = new Block(850,419);
block7 = new Block(805,370);


//level two

block8 = new Block(330,235);
block9 = new Block(360,235);
block10 = new Block(390,235);
block11 = new Block(420,235);
block12 = new Block(450,235);

//level three

block13 = new Block(360,195);
block14 = new Block(390,195);
block15 = new Block(420,195);


//top

block16 = new Block(390,155);
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new SlingShot(polygon,{x:150,y:200})

stand1 = new Stand(390,270,400,20);
stand2 = new Stand(800,500,300,20);


} 




function draw(){
    background(255);
    Engine.update(engine);
ground.display();


    block1.display();
    fill("pink");
    block2.display();
    fill( "pink");
    block3.display();
    fill("pink");
    block4.display();
    fill("pink");
    block5.display();
    fill("pink");
    block6.display()
    fill("pink");
    block7.display();
    fill("pink");
    block8.display();
    fill("pink");
    block9.display();
    fill("pink");
    block10.display();
    fill("pink");
    block11.display();
    fill("pink");
    block12.display();
    fill("pink");
    block13.display();
    fill("pink");
    block14.display();
    fill("pink");
    block15.display();
    fill("pink");
    block16.display(); 
    fill("pink");

    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();
    stand1.display();
    stand2.display();
    
}

function mouseDragged(){
Matter.Body.setPosition(polygon,{x:mouseX, y:mouseY});

}
function mouseReleased(){

slingshot.fly();

}

function keyPressed(){

if(keyCode === 32 ){
slingshot.attach(polygon);
}

}