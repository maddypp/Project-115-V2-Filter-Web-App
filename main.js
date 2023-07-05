function preload() {

}

function setup() {
    canvas = createCanvas(600,600);
    canvas.center();
    video = videoCapture(VIDEO);
    video.hide();
    
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log('posenet has initialized')
}

function gotposes(results) {
    if (results.lenght > 0) {
        console.log(results);
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y -10;
    }
}

function draw() {

}

function save() {

}