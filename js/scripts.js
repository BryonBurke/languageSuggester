$(document).ready(function(){

  $("form#survey").submit(function(event) {
    event.preventDefault();


    var userAge = parseInt($("#age").val());
    var userRick = parseInt($("#rickMeter").val());
    var userHot = parseInt($("#hotMeter").val());
    var userGetup = parseInt($("#getupMeter").val());
    var userTardy = parseInt($("#tardyMeter").val());
    var userMusic = parseInt($("#musicMeter").val());
    var userPatience = parseInt($("#patienceMeter").val());

   var total = (userAge / 4) + userRick + userHot + userGetup + userTardy + userMusic + userPatience;


    console.log(userAge)
    console.log(userRick)
    console.log(userHot)
    console.log(userGetup)
    console.log(userTardy)
    console.log(userMusic)
    console.log(userPatience)
    console.log(total)

      if (total <= 10 ) {
        $(".result").text("C++");
      }
      else if (total > 10 && total <= 20 ) {
        $(".result").text("Java Script");
      }
      else if (total > 20 && total <= 30) {
        $(".result").text("Ada");
      }
      else if (total > 30 && total <= 40) {
        $(".result").text("Basic");
      }
      else if (total > 40 && total <=100) {
        $(".result").text("Pascal");
      }

  });
});
