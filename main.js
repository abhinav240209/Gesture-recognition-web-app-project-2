function preload() {
    
}

function setup() {
    canvas=createCanvas(500,400);
    canvas.position(700,150);
    video=createCapture(VIDEO);
    video.size(500,400);
    video.position(0,150);
    classifier=ml5.poseNet(video,modelLoaded);
    classifier.on('pose',gotResult);
}

function draw() {
    background("blue");
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotResult(results){
    if(results>0){
    console.log(results);
    }
}