var a=window.webkitSpeechRecognition;
var b=new a();
function start(){
    document.getElementById("textbox").innerHTML="";
    b.start();
}
b.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if (content == "take a selfie"){
        console.log("taking selfie");
        speak();

    }
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking a selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()  {
        take_snapshot();
        save();
       
    }, 5000);
    setTimeout(function()  {
        take_snapshot();
        save();
       
    }, 10000);
    setTimeout(function()  {
        take_snapshot();
        save();
       
    }, 15000);
}
camera=document.getElementsById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_url+'">';
    });
}
function save(){
    link=document.getElementById("limk");
    Image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}