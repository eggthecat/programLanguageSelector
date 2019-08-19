function reload(){
  $(".field").val(0);
  $(".userResult").hide();
};

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault()
    $(".userResult").hide()

    var interest = parseInt($("#interest").val());
    var program = parseInt($("#program").val());
    var time = parseInt($("#time").val());
    var internship = parseInt($("#internship").val());
    var location = parseInt($("#location").val());

    var interestScore = interest;
    var programScore = program;
    var timeScore = time;
    var internshipScore = internship;
    var locationScore = location;

    if (interestScore > 1) {
      $("")
    }
  });
});
