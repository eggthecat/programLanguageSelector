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
      alert ("Please indicate whether you are interested in becoming a software developer!");
      $(".userResult").hide();
    } else if (interest === 1) {
      alert ("This quiz is for individuals interested in software development.");
      $("#.userResult").hide();
    } else if (interest === 2) {
      $("#congratulations").show();
    };

    if (program === 0) {
      alert ("Please indicate what platform interests you.");
      $(".userResult").hide();
    } else if (program === 1) {
      $("#cSharp").show();
      $("#go").hide();
      $("#python").hide();
      $("#swift").hide();
    } else if (program === 2) {
      $("#cSharp").hide();
      $("#go").show();
      $("#python").hide();
      $("#swift").hide();
    } else if (program === 3) {
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").show();
      $("#swift").hide();
    } else if (program === 4) {
      $("#cSharp").hide();
      $("#go").hide();
      $("#python").hide();
      $("#swift").show();
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
