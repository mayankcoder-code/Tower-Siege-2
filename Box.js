class Box{

constructor(x,y,width,height){

    var box_options ={
        restitution: 0.5
    }

    this.box = Bodies.rectangle(x,y,width,height, box_options);
    World.add(world,this.box);
    this.width=width
this.height=height
 this.image = loadImage("block.png");
 this.Visiblity = 255
}


display(){
   var angle=this.box.angle
    var pos=this.box.position;
    if(this.box.speed < 4 ){
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    rotate(angle)
    fill("red")
    //rectMode(CENTER);
    //rect(0,0,this.width,this.height);
    pop ()}
    else {
        World.remove(world, this.box);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.box.position.x, this.box.position.y, this.width, this.height);
        pop();
    }


}





}