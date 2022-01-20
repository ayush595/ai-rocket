leftwristX="";
leftwristY="";
scoreleft=0;
function preload() {}
function setup() {
    canvas=createCanvas(450, 450);
    canvas.position(500, 250);

    video=createCapture(VIDEO);
    video.hide();

    modelattacher= ml5.poseNet(video, modelLoaded);
    modelattacher.on("pose", gotposes);
}
function draw() {
    image(video, 0, 0, 500, 500);
    fill("lightblue");
    stroke("lightblue");
    if (leftwristX>0 && leftwristX<255) {
        document.getElementById("rocket").src="R.gif";
    }
    if (leftwristX>255 && leftwristX<450) {
        document.getElementById("rocket").src="th(1).jfif";
    }


}
function modelLoaded() {
    console.log("model is loaded");
}
function gotposes(results) {
    if (results.length>0) {
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        scoreleft=results[0].pose.keypoints[9].score;
    }
}