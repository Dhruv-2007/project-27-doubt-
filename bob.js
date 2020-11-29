class Bob{
    constructor(x,y,radius){
        var Options1 = {
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 1.2

        }
    
        this.body = Bodies.circle(x,y,radius/2,Options1);
        this.radius = radius;
        World.add(world,this.body);
       }
    
       display(){
         var pos = this.body.position;
         fill("#C0C0C0");
         ellipse(pos.x,pos.y,this.radius);  
       }
    }
