status = ""

function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 500, 350);
}