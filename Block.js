class Block
{
    constructor(x,y)
    {
        var options={
            
            restitution:0.3,
            friction:0.5,
            density:0.2



        }
        this.x= x ;
        this.y= y;
        this.width=50;
        this.height = 50;
        this.visibility = 225;
        this.body=Bodies.rectangle(this.x, this.y,50,50,options);
            World.add(world,this.body);
      
        }
        display()
         {
             console.log(this.body.speed)
            if(this.body.speed<3){
                var angle = this.body.angle;
                var paperpos=this.body.position;
                push()
                translate(paperpos.x,paperpos.y);
                rotate(angle);
                rectMode(CENTER);
                rect(0,0,this.width,this.height);
                strokeWeight(3);
                fill(255,681,163);
                pop()
            }else{
                World.remove(world,this.body);
                push();
                this.visibility = this.visibility -5;
               //tint(255,this.visibility);
               //image(this.image,this.body.position.x, this.body.position.y,50,50);
                pop();
            }
             }
            }