screen_width = 0;
screen_height = 0;

x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 for(var i = 1; i <= to_number; i++)
 {
  
 }
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function preload()
{
  loadimage="/Users/akhaliq/Downloads/apple.png";
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
  document.getElementById("status").innerHTML = to_number + "Apples drawn";
    synth.speak(utterThis);

    speak_data = "";
}


function Number()
{
  to_number = Number(content);
  if(Number.isInteger(to_number))
}

for(var i = 1; i <= to_number; i++)
{
  x = Math.floor(Math.random() * 700);
  y = Math.floor(Math.random() * 400);
  Image(apple, x, y, 50, 50);
}