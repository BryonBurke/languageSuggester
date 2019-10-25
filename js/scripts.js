$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var userMarvel = $("input:radio[name=marvel]:checked").val();
    var userAge = parseInt($("#age").val());
    var userRick = parseInt($("#rickRange").val());

    console.log(userMarvel)
    console.log(userAge)
    console.log(userRick)

    if (userMarvel === "ironMan") {



      // if (userAge >= 40 && userRick <5) {
      //   $(".result").text("option1");
      // }
      // else if (userAge >= 40 && userRick >=5) {
      //   $(".result").text("option2");
      // }
      // else if (userAge >= 25 && userRick <5) {
      //   $(".result").text("option3");
      // }
      // else if (userAge >= 25 && userRick >=5) {
      //   $(".result").text("option4");
      // }
      // else if (userAge >= 18 && userRick <5) {
      //   $(".result").text("option5");
      // }
      // else if (userAge >= 18 && userRick >=5) {
      //   $(".result").text("option6");
      // }
    }
