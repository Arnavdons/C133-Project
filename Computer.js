function preload(){
img1=loadImage("Computer.jpeg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modalloaded);
}

function draw(){
image(img1,0,0,550,400);
noFill();
stroke("white");
rect(200,100,200,170);
fill("yellow");
noStroke();
text("Moniter",205,113);

noFill();
stroke("white");
rect(290,300,50,90);
fill("yellow");
noStroke();
text("Mouse",295,313);

noFill();
stroke("white");
rect(50,250,250,130);
fill("yellow");
noStroke();
text("Keyboard",55,263);

}

function back(){
window.location="index.html";
}

function modalloaded(){
console.log("Modal is Loaded!");
status=true;
objectdetector.detect(img1,gotResults);
}

function gotResults(error,results){
if(error){
console.log(error);
}
console.log(results);
}
