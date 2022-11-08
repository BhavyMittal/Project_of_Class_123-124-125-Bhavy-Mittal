difference = 0;

leftWristX = 0;
rightWristX = 0;

function setup()
{
    canvas = createCanvas(550,550);
    canvas.position(560,100);

    video = createCapture(VIDEO);
    video.size(550,500);

    pose = ml5.poseNet(video,modelLoaded); //Intitalizing
    pose.on('pose',gotPoses); //start /execute
}

function draw()
{
    background("#FF4500");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";

    textSize(difference);
    text('Bhavy',50,400);
    

}

function gotPoses(Results)
{
    if (Results.length > 0) {

        console.log(Results);


        leftWristX = Results[0].pose.leftWrist.x;
        rightWristX = Results[0].pose.rightWrist.x;

        difference = Math.floor(leftWristX - rightWristX);
        console.log(difference);
}
}

function modelLoaded()
{
    console.log("modeloaded");
}
