
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;


var ground ;

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

 ground = new Ground(230,795,500,10);

 for(var k =0; k<= innerWidth; k =k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2, 10,divisionHeight));
 }
  for (var j = 15; j <=width; j=j+50){
    plinko.push(new Plinkos(j,75,10));
  }
 
  for (var j = 15; j <=width-10; j=j+50){
    plinko.push(new Plinkos(j,275,10));
  }

  for (var j = 30; j <=width-10; j=j+50){
    plinko.push(new Plinkos(j,175,10));
  }
  
 
}


function draw() {
  background(0);
  Engine.update(engine);


ground.display();

for(var a = 0; a < divisions.length ; a ++ ){
  divisions[a].display();
}

for (var b = 0; b < plinko.length; b++ ){
  plinko[b].display();
}
if (frameCount%60===0){
  particles.push(new Particles(random(width/2-10,width/2+10),10,10));
}
for (var c = 0; c < particles.length; c++ ){
  particles[c].display();
}

}
