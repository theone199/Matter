const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var block, block2, block3;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    block = new Rubber(600,200, 100);
    block2 = new Rubber(600,200, 100);
    block3 = new Rubber(600,200, 100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    block.display();
    block2.display();
    block3.display();
    
 
}