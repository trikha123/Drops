class Drops{
 
        constructor(x, y) {
            var options = {
                'restitution':0.1,
                'friction':0.001
            }
            this.body = Bodies.circle(x, y, 10, options);
            this.radius = 10;
            
            
            World.add(world, this.body);
          }
          
          display(){
           fill("blue")
           ellipseMode(CENTER)
           ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius)



    }

    }
  


           

  