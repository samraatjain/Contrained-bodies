//create new class chain
class Chain
{
    constructor(bodyA,bodyB)
    {
      //in options give the bodies to be attached together,the stiffness of the line and the lenght of the line
        var options={  
    bodyA : bodyA,
        bodyB : bodyB,
        stiffness:0.05,
        length:100,
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display ()
    {
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        //to see the line 
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}