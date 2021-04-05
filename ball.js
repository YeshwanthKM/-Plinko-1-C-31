class Plinko {
    constructor(x,y){
        var options = {
            isStatic : true,
            friction : 0
        }
            this.body = Bodies.circle (x,y,10,options);
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10,10);
        pop();        
    }
}