class Hexagon{

constructor(x,y,width,height){

    var box_options ={
        restitution: 0.5,
        density : 5
    }
    this.image = loadImage("polygon.png")
    this.box = Bodies.rectangle(x,y,width,height, box_options);
    World.add(world,this.box);
    this.width=width
this.height=height

}


display(){
   var angle=this.box.angle
    var pos=this.box.position;
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image,0,0,50,50)
    rotate(angle)
    fill("red")
    //rectMode(CENTER);
    //rect(0,0,this.width,this.height);
    pop ()


}





}