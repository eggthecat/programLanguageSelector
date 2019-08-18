function reload(){
  $(".field").val(0);
  $(".userResult").hide();
}

$(document).ready(function(){
  $("#formOne").submit(event(){
    event.preventDefault()
    $(".userResult").hide()



    var interest = parseInt($("#interest").val());
    var program = text($("#program").val());
    var time = text($("#time").val());
    var internship = text($("#internship").val());
    var location = parseInt($("#location").val());

    var interestScore = interest;
    var locationScore = location;

    var programScore = program;
    var timeScore = time;
    var intershipScore = time;
  });
});
