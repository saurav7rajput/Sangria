for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonClicked = this.innerHTML;
    sound(buttonClicked);
    classOfButton(buttonClicked);
  })
}

document.addEventListener("keydown",function(event){
  sound(event.key);
  classOfButton(event.key);
}
)

function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/common.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/andar.mp3");
      tom2.play();
      break;
    case "b":
      var tom3 = new Audio("sounds/bahar.mp3");
      tom3.play();
      break;
    case "s":
      var tom4 = new Audio("sounds/satya.mp3");
      tom4.play();
      break;
    case "m":
      var snare = new Audio("sounds/maulik.mp3");
      snare.play();
      break;
    case "c":
      var kick = new Audio("sounds/chheda.mp3");
      kick.play();
      break;
    case "g":
      var crash = new Audio("sounds/mehul.mp3");
      crash.play();
      break;
      case "n":
        var crash = new Audio("sounds/naval.mp3");
        crash.play();
        break;
    default:
      var audio = new Audio("sounds/Website1.mp3");
      audio.play();
  }
}

function classOfButton(pressedButton){
  var buttonClass = document.querySelector("."+pressedButton);
  buttonClass.classList.add("pressed");
  setTimeout(function(){
    buttonClass.classList.remove("pressed");
  },100 );
}
