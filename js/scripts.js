$(document).ready(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var userGender = $("input:radio[name=gender]:checked").val();
    var userAge = parseInt($("#age").val());
    var userRick = parseInt($("#rickRange").val());

    console.log(userGender)
    console.log(userAge)
    console.log(userRick)

    if (userGender === "female") {

      >alert("female");

      if (userAge >= 40 && userRick <5) {
        $(".result").text("option1");
      }
      else if (userAge >= 40 && userRick >=5) {
        $(".result").text("option2");
      }
      else if (userAge >= 25 && userRick <5) {
        $(".result").text("option3");
      }
      else if (userAge >= 25 && userRick >=5) {
        $(".result").text("option4");
      }
      else if (userAge >= 18 && userRick <5) {
        $(".result").text("option5");
      }
      else if (userAge >= 18 && userRick >=5) {
        $(".result").text("option6");
      }
    }


    else if (userGender === "male") {

      if (userAge >= 40 && userRick <5) {
        $(".result").text("option7");
      }
      else if (userAge >= 40 && userRick >=5) {
        $(".result").text("option8");
      }
      else if (userAge >= 25 && userRick <5) {
        $(".result").text("option9");
      }
      else if (userAge >= 25 && userRick >=5) {
        $(".result").text("option10");
      }
      else if (userAge >= 18 && userRick <5) {
        $(".result").text("option11");
      }
      else if (userAge >= 18 && userRick >=5) {
        $(".result").text("option12");
      }
    }

    else {
      $(".result").text("tough luck");
    }
  });
});
