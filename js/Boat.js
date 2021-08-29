class Boat{
    constructor(x,y,width,height,boatPos){
    var options={
        restitution:0.8,
        density:1.0,
        friction:1.0
    }
    this.image=loadImage("assets/boat.png");
    this.body= Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width=width;
    this.height=height;
    this.boatPos= boatPos;
    
    }

    display(){
    var pos = this.body.position;
    var angle= this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, this.boatPos, this.width,this.height );
    noTint();
    pop();
    }
}