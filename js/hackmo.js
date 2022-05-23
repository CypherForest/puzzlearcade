let numbers = ["15","7","2","1","2","19","2","7"];
let numbers2 = ["16","19","20","23","18","18","19","7"];
let keyA = "14"
let keyB = "14"
let x; 
let y;
let hackmo;
let index = 0;
let game =0;

function preload(){
    hackmo = loadImage("js/data/hackmo.png");
}

function setup(){
let canvas = createCanvas(600,600);
canvas.parent('sketch-container');
background(0);
image(hackmo,0,0);
textSize(26)
fill(200,200,20);
setTimeout(denQ1,1000);
setTimeout(denQ2,2000);
setTimeout(denQ3,3000);
setTimeout(denQ4,4000);
setTimeout(detQ1,5000);
setTimeout(detQ2,6000);
setTimeout(detQ3,7000);
setTimeout(detQ4,8000);
setTimeout(reset,10000);
setTimeout(denQ1,11000);
setTimeout(denQ2,12000);
setTimeout(denQ3,13000);
setTimeout(denQ4,14000);
setTimeout(detQ1,15000);
setTimeout(detQ2,16000);
setTimeout(detQ3,17000);
setTimeout(detQ4,18000);
}


function draw(){
if(game===1){
    background(0);
    image(hackmo,0,0);
}
text(keyA, 500,240);
text(keyB,500,290);

}

function denQ1() {
    text(numbers[0],210,240);
    }
    function denQ2() {
    text(numbers[1],280,240);
    }
    function denQ3() {
    text(numbers[2],355,240);
    }
    function denQ4() {
    text(numbers[3],430,240);
    }
    function detQ1() {
text(numbers[4],210,290);
    }
    function detQ2() {
text(numbers[5],280,290);
    }
    function detQ3() {
text(numbers[6],355,290);
    }
    function detQ4() {
text(numbers[7],430,290);

    }

function denQ5() {
text(numbers[7],430,290);

    }

    function reset() {
        background(0);
        image(hackmo,0,0);
    }

function changeScore() {
    index = index + 1;
    if(index>=numbers.length){
        index = 0;
    }
}
