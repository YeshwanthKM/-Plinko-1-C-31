const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = [];
var division = [];
var particles = [];
var divisionHeight=300;
var count = 0;
function setup(){
    createCanvas (720,700);
    engine= Engine.create();
    world= engine.world;
    ground = new Ground (780,700,2000,15);
    left = new Ground (0,500,15,1500);
    right = new Ground (1500,500,15,1500);

    for (var k = 0; k <=width; k = k + 80) {
        division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }
      for (var j = 75; j <=width; j=j+50) 
      {
         plinkos.push(new Plinko(j,75));
      }
      for (var j = 50; j <=width-10; j=j+50) 
      {
         plinkos.push(new Plinko(j,175));
      }
      for (var j = 75; j <=width-10; j=j+50) 
      {
         plinkos.push(new Plinko(j,275));
      }
      for (var j = 50; j <=width-10; j=j+50) 
      {
         plinkos.push(new Plinko(j,375));
      }
}
function draw(){
    Engine.update(engine);
    background("black");
    ground.display();
    right.display();
    left.display();
    if(frameCount%40===0){
        particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
        count++;
      }

    for (var a = 0; a < plinkos.length; a++) {
        plinkos[a].display();
    }
    for (var j = 0; j < particles.length; j++) {
        particles[j].display();
      }
    for (var k = 0; k < division.length; k++) {
        division[k].display();
      }
      fill("white")
      text("score: ",count,500,500);
}
