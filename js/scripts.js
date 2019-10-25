$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();


    var userAge = parseInt($("#age").val());
    var userRick = parseInt($("#rickRange").val());
    var userHot = parseInt($("#hotRange").val());
    var userGetup = parseInt($("#getupRange").val());
    var userTardy = parseInt($("#tardyRange").val());
    var userMusic = parseInt($("#musicRange").val());
    var userPatience = parseInt($("#patienceRange").val());

   var total = userRick + userHot + userGetup + userTardy + userMusic +userPatience;


    console.log(userAge)
    console.log(userRick)
    console.log(userHot)
    console.log(userGetup)
    console.log(userTardy)
    console.log(userMusic)
    console.log(userPatience)
    console.log(total)

      if (total <= 10 ) {
        $(".result").text("option1");
      }
      else if (total > 10 && <20 ) {
        $(".result").text("option2");
      }
      else if (total > 20 && <30) {
        $(".result").text("option3");
      }
      else if (total > 30 && <40) {
        $(".result").text("option4");
      }
      else if (total > 40 && <50) {
        $(".result").text("option5");
      }

  });
});
