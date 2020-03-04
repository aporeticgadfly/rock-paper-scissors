
var dynamicScore = 0;
/*
var initialWidth = window.innerWidth;

var unit = window.innerWidth /100;

var initialPosition = $(".middle").css("left");
var initialPosNum = initialPosition.match(/\d+/);

$(window).resize(function() {
  var secondWidth = window.innerWidth;
  var widthLost = initialWidth - secondWidth;
  var adjust = initialPosNum - widthLost;

  $(".middle").css("left", adjust + "px");
  initialWidth = window.innerWidth;
  initialPosition = $(".middle").css("left");
  initialPosNum = initialPosition.match(/\d+/);
});
*/

$("#modalBtn").on("click", function() {
  $("#rulesModal").css("display", "block");
});

$(".close").on("click", function() {
  $("#rulesModal").css("display", "none");
});

$("input").on("click", function(event) {
  //add and remove middle css classes
  $(".middle").addClass("middleDis");
  $(".play").addClass("playApp");
  //get the button that was chosen and display
  var btnClicked = event.target;
  var imagePath = $(btnClicked).attr("src");
  var btnSelected;

  $(".firstBtn input").attr("src", imagePath);

  if( $($(btnClicked).parent()).hasClass("paper") === true) {
    $(".firstBtn").css("background-image", "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))");
    $(".firstBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(349, 71%, 50%)");
    btnSelected = "paper";
  }
  else if( $($(btnClicked).parent()).hasClass("rock") === true) {
    $(".firstBtn").css("background-image", "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))");
    $(".firstBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(230, 89%, 60%)");
    btnSelected = "rock";
  }
  else if( $($(btnClicked).parent()).hasClass("scissors") === true) {
    $(".firstBtn").css("background-image", "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))");
    $(".firstBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(39, 89%, 45%)");
    btnSelected = "scissors";
  }
  //display an empty space, after a short interval display a random button
  var randNum = Math.random() * 3;
  var btnGenerated;

  if(randNum >= 0 && randNum <= 0.99) {
    setTimeout(
      function() {
        $(".secondBtn input").attr("src", "images/icon-paper.svg");
        $(".secondBtn").css("background-image", "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))");
        $(".secondBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(349, 71%, 50%)");
        btnSelected = "paper";
      }
    , 500);
    btnGenerated = "paper";
  }
  else if (randNum > 0.99 && randNum <= 1.99) {
    setTimeout(
      function () {
        $(".secondBtn input").attr("src", "images/icon-rock.svg");
        $(".secondBtn").css("background-image", "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))");
        $(".secondBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(230, 89%, 60%)");
        btnSelected = "rock";
      }
    , 500);
    btnGenerated = "rock";
  }
  else {
    setTimeout(
      function() {
        $(".secondBtn input").attr("src", "images/icon-scissors.svg");
        $(".secondBtn").css("background-image", "radial-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))");
        $(".secondBtn").css("box-shadow", "0 0.3rem 0.3rem 0 hsla(0, 0%, 0%, 0.3), 0 0.3rem 0 0 hsl(39, 89%, 45%)");
        btnSelected = "scissors";
      }
    , 500);
    btnGenerated = "scissors";
  }
  $(".result").addClass("resultApp");



  //display resultant message and animation on winning button
  if (btnSelected === btnGenerated) {
    //tie
    $(".resultMsg").text("TIE");
  }
  else if (btnSelected === "paper" && btnGenerated === "rock") {
    //win
    $(".resultMsg").text("YOU WIN");
    dynamicScore++;
    $(".scoreNum").text(dynamicScore);
  }
  else if (btnSelected === "paper" && btnGenerated === "scissors") {
    //lose
    $(".resultMsg").text("YOU LOSE");
  }
  else if (btnSelected === "rock" && btnGenerated === "paper") {
    //lose
    $(".resultMsg").text("YOU LOSE");
  }
  else if (btnSelected === "rock" && btnGenerated === "scissors") {
    //win
    $(".resultMsg").text("YOU WIN");
    dynamicScore++;
    $(".scoreNum").text(dynamicScore);
  }
  else if (btnSelected === "scissors" && btnGenerated === "paper") {
    //win
    $(".resultMsg").text("YOU WIN");
    dynamicScore++;
    $(".scoreNum").text(dynamicScore);
  }
  else if (btnSelected === "scissors" && btnGenerated === "rock") {
    //lose
    $(".resultMsg").text("YOU LOSE");
  }
});

$(".playAgain").on("click", function() {
  $(".middle").removeClass("middleDis");
  $(".play").removeClass("playApp");
});
