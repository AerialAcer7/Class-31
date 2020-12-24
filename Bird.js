class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.image2 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.position.x>200){
    var pos = [this.body.position.x,this.body.position.y];
    this.trajectory.push(pos);
    }
    super.display()
    console.log(this.trajectory);

    for(var i = 0;i<this.trajectory.length;i=i+1){
      console.log(this.trajectory[i][0]+"     "+ this.trajectory[i][1]);
      image(this.image2,this.trajectory[i][0],this.trajectory[i][1]);


    }
  }
}
