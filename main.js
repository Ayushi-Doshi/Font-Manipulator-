x = 0;
y = 0;
difference = 0;
rwx = 0;
lwx = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,ModelLoaded);
    poseNet.on('pose', gp);
}

function ModelLoaded(){
    console.log('Model is Loaded !');
}

function gp(results){
    if
    (results.length > 0)
    {
       console.log(results);  
       x = results[0].pose.nose.x;
       y = results[0].pose.nose.y;
       console.log("nose X = "+x +"    Nose Y = "+y); 
       lwx = results[0].pose.leftWrist.x ;
       rwx = results[0].pose.rightWrist.y ;
       difference = floor(rwx-lwx);
       console.log("LeftWrist X = "+lwx +"    Rightwrist Y = "+rwx+" difference = "+ difference); 
    }
}

function draw(){
    document.getElementById("sl").innerHTML = "Font size of the Text = "+difference;
    background('#969A97');
    fill('#F90093');
    stroke('#F90093');
    text('AYUSHI',x,y);
    textSize(difference);
}