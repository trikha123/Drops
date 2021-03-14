const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = []
function preload(){
    thunder1 = loadImage("1.png")
    thunder2 = loadImage("2.png")
    thunder3 = loadImage("3.png")
    thunder4 = loadImage("4.png")



}

function setup(){
    createCanvas(800,800)
    engine = Engine.create();
    world  = engine.world
    if(frameCount %150 === 0){
        for(var I = 0; I<100; I++){
            drops.push(new Drops(random(0, 400), random(0,400)))



        }
    }
    umbrella1 = new umbrella(200,200)
   
    
}

function draw(){
    Engine.update(engine);
    background("black")

    
    for(var i = 0; i<100; i++){
        drops[i].display()
    }
    umbrella1.display();
    var rand = Math.round(random(1,4))
    if(frameCount %40===0){
        thunder  = createSprite(random(10,370), random(10,370), 10, 10)
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break; 




            
        }
        thunder.scale = random(0.3, 0.6)
        thunder.lifetime = 10
    }
    drawSprites();
    }

  

    
    
   


