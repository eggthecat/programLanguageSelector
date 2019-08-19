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

    if (interest = 0) {
      alert ("Please indicate whether you are interested in becoming a software developer!");
      $("#.userResult").hide();
    } else if (interest = 1) {
      alert ("This quiz is for individuals interested in software development.");
      $("#.userResult").hide();
    } else (interest = 2) {
    }

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

  });
});
