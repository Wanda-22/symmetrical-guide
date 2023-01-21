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