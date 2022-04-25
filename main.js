function change_color(){
     document.body.style.color = "purple";
      return false; 
      element.style.borderColor="red"
      
      return false; 
}
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
function start(){
  document.getElementById("voice_output").innerHTML='';
  recognition.start();

}
recognition.onresult=function(event){
    console.log(event)
    var voice =event.results[0][0].transcript;
    console.log("voiceis"+voice)
    document.getElementById("voice_output").innerHTML=voice;
    if(voice=="Take my selfie."){
        console.log("I am inside if")
        speak()
    }
    
    
}
function speak(){
    var synth = window.speechSynthesis;
     speak_data = "Taking you Selfie in 5 seconds";
      var utterThis = new SpeechSynthesisUtterance(speak_data);
      synth.speak(utterThis);
      Webcam.attach(camera);
    setTimeout(function(){take_snapshot();save();},5000);
  
}


camera=document.getElementById("camera");
Webcam.set({
    height:300,
    width:400,
    image_font:'jpeg',
    jpeg_quality:100
});

function take_snapshot()
 { Webcam.snap(function(data_uri)
     { document.getElementById("selfie").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
     }); }
     function save(){
         link = document.getElementById("link");
         image = document.getElementById("selfie_image").src;
         link.href=image;
         link.click();
     }
