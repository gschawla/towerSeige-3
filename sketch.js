const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var base1;
var score=0;
function preload() {
    getBackgroundImage();
    
}

function setup(){
    var canvas = createCanvas(1200,700);

    
  

    engine = Engine.create();
    world = engine.world;

    base1= new Base(455,525,248,10);
    base2= new Base(860,300,248,10);


    block1= new Block (950,275,30,40);
    block2= new Block (770,275,30,40);
    block3= new Block (920,275,30,40);
    block4= new Block (890,275,30,40);
    block5= new Block (860,275,30,40);
    block6= new Block (830,275,30,40);
block7= new Block (800,275,30,40);
block8 = new Block (800,235,30,40);

block9 = new Block (830,235,30,40);
block10 = new Block (860,235,30,40);
block11 = new Block (890,235,30,40);
block12 = new Block(920,235,30,40);

//level three

block13 = new Block (830,195,30,40); 
block14 = new Block (860, 195,30,40);
block15 = new Block (890,195,30,40);

//to

block16 = new Block (860,155,30,40);


block17 = new Block (400,500,30,40);
block18 = new Block (430,500,30,40);
block19 = new Block (460,500,30,40);
block20 = new Block (490,500,30,40);
block21 = new Block(520,500,30,40);
//level three
block22 = new Block (490,460,30,40);
 block23 = new Block (460,460,30,40);
block24 = new Block (430,460,30,40);
//top
block25= new Block (460,420,30,40);

Stone1 =new stone(55,450,20)

sling1 = new SlingShot(Stone1.body,{x:55,y:450})




}

function draw(){
    //background("#372B2B");
    Engine.update(engine);
text("SCORE:"+score,750,40)
    base1.display();
   
    base2.display();

    fill("#86CDE9")
    strokeWeight(2)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
   
    block7.display();
    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("aqua")
    block13.display();
    
    block14.display();
    block15.display();
    fill("grey")
    block16.display();
    fill("#86CDE9")
    block17.display();
    
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    fill("aqua")
    block22.display();
    block23.display();
  
    block24.display();
    fill("grey");
    block25.display();
Stone1.display();
sling1.display()
fill("white")
text("Drag the hexagonal stone to release it, to launch it towards the blocks ",69,50,)

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();




}
function mouseDragged(){
    Matter.Body.setPosition(Stone1.body,{x:mouseX,y:mouseY})
  }
  
  
  function mouseReleased(){
  sling1.fly()
  
  
  }
  
  
  function keyPressed(){
  if(keyCode === 32){
  
  Matter.Body.setPosition(Stone1.body, {x:235, y:420})
  sling1.attach(Stone1.body);
  }
  
  }
  async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
 
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    //console.log(hour);
 
    if (hour >= 06 && hour <= 18) {
      bg = "images/light.png";
    } else {
      bg = "images/dark.png";
    }
 
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
 }

 
