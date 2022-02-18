Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie!">';
    });
}

console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T6XM6r1M6/model.json',modelloaded);
function modelloaded()
{
    console.log("model is loaded");
}

function identify()
{
 img=document.getElementById("selfie!");
 classifier.classify(img,gotResults);   
}

function gotResults(error,results)
{
 if(error)
 {
     console.log(error);
 }
 else{
     console.log(results);
     document.getElementById("result_object_name").innerHTML=results[0].label;
     document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
 }
}