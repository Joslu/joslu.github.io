let img;
let Painter1;
let Painter2;

let pos;
let prev;

let lm1 = 4;
let lm2 = 10;
const N = 600;
let painters = [N];

function preload(){
    img = loadImage("images/ukulele.jpg");
}

function mousePressed(){
  
}


function setup() {
  createCanvas(800, 800);
  background(255);
  for(let i = 0; i < N; i++){

    painters[i] = new RandomPainter(windowWidth/2,windowHeight/2,random(2,10),lm1,lm2,img);

  }
/*
  Painter1 = new RandomPainter(windowWidth/2,windowHeight/2,4,lm1,lm2,img); 
  Painter2 = new RandomPainter(windowWidth/2,windowHeight/2,4,lm1,lm2,img);
  Painter3 = new RandomPainter(windowWidth/4,windowHeight/4,4,lm1,lm2,img); 
  Painter4 = new RandomPainter(windowWidth/8,windowHeight/8,4,lm1,lm2,img);
*/
}

function draw() {

  translate(
		width / 2 - img.width / 2,
		height / 2 - img.height / 2
  );

   for(let i = 0; i < N; i++){

    painters[i].move();
   }

  /*
  Painter1.move();
  Painter2.move();
  Painter3.move();
  Painter4.move();
  

  console.log(Painter2.positionWalker());
*/
 // image(img, 0, 0);
}


class RandomPainter{

  //Constructor
  constructor(px,py,s,l1,l2, imagen){
    this.px = px;
    this.py = py;
    this.s = s;
    this.l1 = l1;
    this.l2 = l2;
    this.pos = createVector(this.px, this.py);
    this.prev = this.pos.copy();

    this.imagen = imagen;
    
    
  }

  move(){

    if (this.pos.x > this.imagen.width || this.pos.y > this.imagen.height || this.pos.x < 0 || this.pos.y < 0 ){
      this.pos.x = this.prev.x;
      this.pos.y = this.prev.y;
     
    }

    stroke(this.imagen.get(this.pos.x,this.pos.y)); //pinta
    strokeWeight(this.s);
    line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
  

    line(this.pos.x,this.pos.y,this.prev.x,this.prev.y);
    this.prev = this.pos.copy();
    let step = p5.Vector.random2D();
    step.mult(random(this.l1,this.l2));
    this.pos.add(step);

    
  }

  paint(){
    stroke(0); //pinta
    strokeWeight(10);
    point(this.x, this.y);
  }

  positionWalker(){
    let a= [this.pos.x, this.pos.y]
    return a;
  }

 




}