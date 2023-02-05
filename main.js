video="";
status="";
objects=[];
function preload(){
video=createVideo('video.mp4')
video.hide()
}

function setup(){
canvas=createCanvas(680,580)
canvas.position(950,400)
}

function draw(){
image(video,0,0,680,580)
if(status != ""){
objectDetector.detect(video,gotresult)
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:objects detected"
document.getElementById("number_of_objects").innerHTML="number of objects detected are:"+objects.length;
fill("#FF0000");
percent=floor(objets[i].confidence*100)
text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y)
noFill()
stroke("#FF0000")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}

}
}

function start(){
objectDetector=ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innerHTML="status:getting objects"
}
function  modelloaded(){
console.log("modelloaded")
status=true
video.loop()
video.speed (1)
video.volume(0)
}

function gotresult(error,results){
if(error){
console.error(error)
}
{
console.log(results)
objects=results;
}
}