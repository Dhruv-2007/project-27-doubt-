class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 500
        }
        this.string = Matter.Constraint.create(options);

        World.add(world, this.string);
    }

    display(){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.bodyB.position;

        pointB = {x:this.offsetX , y:this.offsetY}

        strokeWeight(4);
        fill("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}