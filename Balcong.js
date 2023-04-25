status="";

objects=[];

function preload(){
img1=loadImage("Computer.jpeg");
}

function setup(){
canvas=createCanvas(550,400);
canvas.center();
objectdetector=ml5.objectDetector("cocossd",modalloaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function draw(){
image(img1,0,0,550,400);
if(status!=""){
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status : Object Detected";
fill("white");
stroke("white");
percent=floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
noFill();
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
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
objects=results;
}
