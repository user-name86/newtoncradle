class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.x = x;
        this.y = y;
         this.body = Bodies.circle(x,y,radius,options);
         this.radius = radius/2;
            
         World.add(world,this.body);
    }
   
    display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       ellipseMode(CENTER);
       fill(255,255,203);
       ellipse(0,0,this.radius);
       pop();
    }
   }