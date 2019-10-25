$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();


    var userAge = parseInt($("#age").val());
    var userRick1 = parseInt($("#rickRange1").val());
    var userRick2 = parseInt($("#rickRange2").val());
    var userRick3 = parseInt($("#rickRange3").val());
    var userRick4 = parseInt($("#rickRange4").val());

   var total = userRick1 + userRick2 + userRick3 + userRick4


    console.log(userAge)
    console.log(userRick1)
    console.log(userRick2)
    console.log(userRick3)
    console.log(userRick4)
    console.log(total)

      if (total <= 10 ) {
        $(".result").text("option1");
      }
      // else if (total > 10 && <=20 ) {
      //   $(".result").text("option2");
      // }
      // else if (total > 20 && <=30) {
      //   $(".result").text("option3");
      // }
      // else if (total > 30 && <=40) {
      //   $(".result").text("option4");
      // }
      // else if (total > 40 && <=50) {
      //   $(".result").text("option5");
      // }
    //   else if (total > 10 && <=20) {
    //     $(".result").text("option6");
    //   }
    // // }
    //
    //
    // else if (userGender === "male") {
    //
    //   if (userAge >= 40 && userRick <5) {
    //     $(".result").text("option7");
    //   }
    //   else if (userAge >= 40 && userRick >=5) {
    //     $(".result").text("option8");
    //   }
    //   else if (userAge >= 25 && userRick <5) {
    //     $(".result").text("option9");
    //   }
    //   else if (userAge >= 25 && userRick >=5) {
    //     $(".result").text("option10");
    //   }
    //   else if (userAge >= 18 && userRick <5) {
    //     $(".result").text("option11");
    //   }
    //   else if (userAge >= 18 && userRick >=5) {
    //     $(".result").text("option12");
    //   }
    // }
    //
    // else {
    //   $(".result").text("tough luck");
    // }
  });
});
