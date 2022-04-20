let x = 10;
let y = 410;
let running = false;
let sel;
let bgCol;
let img;
let input;
let button;



function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('walk');
    img = loadImage("js/data/loic.png");
    stroke('5');
    background(0,0,100);
    fill(255,96)
    rect(210,10,380,355);
    stroke(0);
    fill(0);
    textSize(15);   
    textWrap(WORD);
    text('Low Orbit Ion Cannon is an open-source network stress testing and denial-of-service attack application written in C#. LOIC[19] was initially developed by Praetox Technologies, however it was later released into the public domain and is currently available on several open-source platforms.LOIC[21] performs a DoS attack (or, when used by multiple individuals, a DDoS attack) on a target site by flooding the server with TCP[68], UDP, or HTTP packets with the intention of disrupting the service of a particular host. People have used LOIC[01] to join voluntary botnets. The software inspired the creation of an independent JavaScript version called JS LOIC, as well as LOIC-derived web version called Low Orbit Web Cannon. These enable a DoS from a web browser. Press T to reset.', 230,30,370)
    fill(40,0,180);
    rect(0,400,600,200);
    input = createInput();
    input.position(360, 380);
    button = createButton("submit");
    button.position(520, 380);
    button.mousePressed(drawName);
    
    
//   sel = createSelect([1,2,3,4]);
//   sel.position(400, 320);
//   sel.option('Red');
//   sel.option('Blue');
//   sel.option('Green');
//   sel.changed(changeBg);
  
//   bgCol = color(0,0,200);
 
}

function draw() {
    image(img,0,0,200,400);
    noStroke();
   fill(40,0,180);
   textSize(42);
 
   text("Password: payback", 100, 500);
   
   stroke(240);
   strokeWeight(5);

   point(x, y);
   point(x+random(15), y+random(15));
   point(x+random(25), y+random(25));
   point(x+random(50), y+random(50));
    if(running == true){
        let randNum = floor(random(4));
        if(randNum == 0){
            x=x+15;
        } else if(randNum == 1){
         x=x-15;
     } else if(randNum == 2){
         y=y+15;
     } else if(randNum == 3){
         y=y-15;
     };
 
     if(x >= width-10 || x<=10){
         
         x = random(10,width-10);
         y = random(410,height-10);
     };
 
     if(y >= height-10 || y<= 410){
      
      x = random(10,width-10);
      y = random(410,height-10);
     }
 
    }
   
}

function drawName() {
   
    textSize(30);
    var name = input.value();
   // for (var i=0; i < 30; i++) {
      if(name == '192.168.0.1'){
          running=!running;
      } else {
          text('wrong',300,500)
        }
    //}
  }

// function changeBg(){
//     let val = sel.value();
//  if(val == 'Red'){
//    bgCol = color(0,0,200);
//    running = false;
//  } else if(val == 'Blue'){
//       bgCol = color(255);
//       running = true;
//  } else if(val == 'Green'){
//     //  bgCol = color(0,255,0); 
//       running = false;
//  }
// }

function mousePressed(){
   //running = !running;

}

function keyPressed(){
    if(key=='t'){
        x=10;
        y=410;
    fill(40,0,180);
    rect(0,400,600,200);
    running=false;
    }
}
