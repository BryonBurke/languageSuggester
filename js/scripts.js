$(document).ready(function(){
  // $("button").click(function(){
  //   $(h3).show()  fix this
  // }
  $("form#survey").submit(function(event) {
    event.preventDefault();


    var userAge = parseInt($("#age").val());
    var userRick = parseInt($("#rickRange").val());
    var userHot = parseInt($("#hotRange").val());
    var userGetup = parseInt($("#getupRange").val());
    var userTardy = parseInt($("#tardyRange").val());
    var userMusic = parseInt($("#musicRange").val());
    var userPatience = parseInt($("#patienceRange").val());

   var total = (userAge / 4) + userHot + userGetup + userTardy + userMusic + userPatience;


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
      else if (total > 40 && total <=50) {
        $(".result").text("Pascal");
      }

  });
});
