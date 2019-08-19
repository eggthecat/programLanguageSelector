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

    if (interest === 0) {
      $("#interestUnanswered").show();
      $("#interestNo").hide();
      $("#interestYes").hide();
    } else if (interest === 1) {
      $("#interestUnanswered").hide();
      $("#interestNo").show();
      $("#interestYes").hide();
    } else if (interest === 2) {
      $("#interestUnanswered").hide();
      $("#interestNo").hide();
      $("#interestYes").show();
    };

    if (program === 0) {
      $("#noProgramResponse").show();
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").hide();
      $("#swift").hide();
    } else if (program === 1) {
      $("noProgramResponse").hide();
      $("#cSharp").show();
      $("#go").hide();
      $("#python").hide();
      $("#swift").hide();
    } else if (program === 2) {
      $("noProgramResponse").hide();
      $("#cSharp").hide();
      $("#go").show();
      $("#python").hide();
      $("#swift").hide();
    } else if (program === 3) {
      $("noProgramResponse").hide();
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").show();
      $("#swift").hide();
    } else if (program === 4) {
      $("noProgramResponse").hide();
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").hide();
      $("#swift").show();
    };

    if (time === 0) {
      $("#noTimeResponse").show();
      $("#dayResponse").hide();
      $("#nightResponse").hide();
    } else if (time === 1) {
      $("#noTimeResponse").hide();
      $("#dayResponse").show();
      $("#nightResponse").hide();
    } else if (time === 2) {
      $("#noTimeResponse").hide();
      $("#dayResponse").hide();
      $("#nightResponse").show();
    }

    if (internship === 0){
      $("#noInternshipResponse").show();
      $("#noInternship").hide();
      $("#yesInternship").hide();
    } else if (internship === 1){
      $("#noInternshipResponse").hide();
      $("#noInternship").show();
      $("#yesInternship").hide();
    } else if (internship === 2){
      $("#noInternshipResponse").hide();
      $("#noInternship").hide();
      $("#yesInternship").show();
    }

    if (){
      $("#").();
      $("#").();
      $("#").();
      $("#").();
      $("#").();
    } else if (){
      $("#").();
      $("#").();
      $("#").();
      $("#").();
      $("#").();
    } else if (){
      $("#").();
      $("#").();
      $("#").();
      $("#").();
      $("#").();
    } else if (){
      $("#").();
      $("#").();
      $("#").();
      $("#").();
      $("#").();
    } else if (){
      $("#").();
      $("#").();
      $("#").();
      $("#").();
      $("#").();
    }

  });
});

    // var interestScore = interest;
    // var programScore = program;
    // var timeScore = time;
    // var internshipScore = internship;
    // var locationScore = location;

    // function loop() {
    //   var answer;
    //   for(var i = 0; i < answer; i++ ) {
    //     if(i==="1") {
    //       //action here
    //     } else if (i==="2"){
    //       //action here
    //     }
    //   }
    // }
    //
