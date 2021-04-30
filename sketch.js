const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;


function preload(){
    
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   
    hexagon = new Hexagon(100,200,50,50);
    console.log(hexagon.box);
    slingshot = new SlingShot(hexagon.box,{x : 100,y : 200})
    ground = new Ground(600,height,1200,20);
    platform = new Ground(300, 305, 250, 20);
    platform2 = new Ground(900,200,250,20);
    block1 = new Box(800,170,30,50);
    block2 = new Box(830,170,30,50);
    block3 = new Box(860,170,30,50);
    block4 = new Box(890,170,30,50);
    block5 = new Box(920,170,30,50);
    block6 = new Box(950,170,30,50);
    block7 = new Box(980,170,30,50);
    block8 = new Box(1010,170,30,50);
    block9 = new Box(860,150,30,50);
    block10 = new Box(830,150,30,50);
    block11 = new Box(890,150,30,50);
    block12 = new Box(920,150,30,50);
    block13 = new Box(950,150,30,50);
    block14 = new Box(980,150,30,50);
    block15 = new Box(860,130,30,50);
    block16 = new Box(890,130,30,50);
    block17 = new Box(920,130,30,50);
    block18 = new Box(950,130,30,50);
    blockA = new Box(920,110,30,50);
    blockB = new Box(890,110,30,50);

    block19 = new Box(300,250,30,50);
    block20 = new Box(330,250,30,50);
    block21 = new Box(360,250,30,50);
    block22 = new Box(390,250,30,50);
    block23 = new Box(270,250,30,50);
    block24 = new Box(240,250,30,50);
    block25 = new Box(210,250,30,50);
    block26 = new Box(240,230,30,50);
    block27 = new Box(270,230,30,50);
    block28 = new Box(300,230,30,50);
    block29 = new Box(330,230,30,50);
    block30 = new Box(360,230,30,50);
    block31 = new Box(270,210,30,50);
    block32 = new Box(300,210,30,50);
    block33 = new Box(330,210,30,50);
    block34 = new Box(300,190,30,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    hexagon.display();
    slingshot.display();
    ground.display();
    platform.display();
    platform2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    blockA.display();
    blockB.display();

    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    
}
function mouseDragged(){
 
        Matter.Body.setPosition(hexagon.box, {x: mouseX , y: mouseY});
    }

    function keyPressed(){
        if(keyCode === 32){
           slingshot.attach(hexagon.box);
        }
    }

function mouseReleased(){
    slingshot.fly();
    
}
