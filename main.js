function preload(){

}

function setup(){
  canvas=createCanvas(550,550)
  canvas.position(560,150)
  video=createCapture(VIDEO)
  video.size(550,550)
  poseNet=ml5.poseNet(video,modelLoaded)
   poseNet.on("pose",gotposes) 

}

function draw(){
 rect(300,300,80,80)
 
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotposes(errors,results){
  if(errors){
    console.log(errors)
    }
  else{
    console.log(results)
  }
}
