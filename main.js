Webcam.attach( '#camera' );

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function cap() {
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="pic" src="'+data_uri+'"/>';
    } );
 }

 console.log("ml5 version is",ml5.version);
 o=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/URm_r0o_l/model.json',modelloaded);
function modelloaded() {
    console.log("all the models are loaded");
}

function p() {
    e=document.getElementById('pic');
    o.classify(e,ans);
}

function speak() {
    var voice=window.speechSynthesis;
    s1="Prediction is " + p1;
    var u=new SpeechSynthesisUtterance(s1);
    voice.speak(u);
}


function ans(error,result) {
    if (error) {
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById('result_name').innerHTML=result[0].label;
        p1=result[0].label;
        speak();
        if (result[0].label=="UP") {
            document.getElementById("e").innerHTML="&#9757;";
        }
        if (result[0].label=="Nice") {
            document.getElementById("e").innerHTML="&#128076;";
        }
        if (result[0].label=="Raised Hand") {
            document.getElementById("e").innerHTML="&#128400;";
        }
        if (result[0].label=="Hi") {
            document.getElementById("e").innerHTML="&#128079;";
        }
    }
}