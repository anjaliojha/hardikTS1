class Rope{
    constructor(bodyA,pointB){
       var options = {
       bodyA : bodyA,
       pointB : pointB,
       stifness:2,
       length:10
}
this.chain = Constraint.create(options);
World.add(world,this.chain);


}
display(){
    var bodyA = this.chain.bodyA.position;
    var pointB = this.chain.pointB.position;
    push();
    translate(bodyA.x,bodyA.y,pointB.x,pointB.y);
   // stroke("black");
   // fill("white");
   // rectMode(CENTER);
    line(bodyA.x,bodyA.y,pointB.x,pointB.y);
    pop();

}
}