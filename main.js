https://teachablemachine.withgoogle.com/models/Shy7ieUAt/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+">";
    });
}
console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Shy7ieUAt/model.json",modelloaded);

function modelloaded(){
console.log("Model is Loaded");
}
prediction1="";

function speak(){
    var synth=window.speechSynthesis;
speak_data1="The First Prediction is "+prediction1;

var utterthis=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterthis);
}

function predict(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("emotion_name").innerHTML=results[0].label;
        prediction1=results[0].label;
        speak();

        if(prediction1=="Amazing"){
            document.getElementById("emoji1").innerHTML="&#128076;";
        }
        if(prediction1=="Best"){
            document.getElementById("emoij1").innerHTML="&#128077";
        }
        if(prediction1=="Victory"){
            document.getElementById("emoji1").innerHTML="&#9996;";
        }
    }
}