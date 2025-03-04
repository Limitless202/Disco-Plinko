class Plinko{
    constructor(x, y, r){

        var options={
            isStatic : true
        }

        this.r=r;
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));

        this.body = Bodies.circle(x, y, this.r, options);
        
        
        
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        fill(random(0,255),random(0,255),random(0,255));
        ellipseMode(RADIUS);
        circle(0, 0, this.r);
        pop();

        
        }
};