class Boat{
    constructor(x,y,width,heigth,boatPos){
/*var options={
    restitucion:0.8,
    friccion:1.0,
    densidad:1.0
};*/
this.body=Bodies.rectangle(x,y,width,heigth);
this.width=width;
this.heigth=heigth;

this.image=loadImage("./assets/boat.png");
this.boatPosition=boatPos;
World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,this.boatPosition,this.width,this.heigth)
    pop();

}


}