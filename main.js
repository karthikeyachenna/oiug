song="";

function preload()
{
   song=loadSound("music.mp3")
   song=loadSound("music2.mp3")
   song=loadSound("Alone_-_Color_Out.mp3")
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,600,500);
}

function play()
{
    song.play();
}
function start()
{
    song.play();
}
function go()
{
    song.play();
}