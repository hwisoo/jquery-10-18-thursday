$(function() {
    $("form#add").submit(function(event) {
    let age = parseInt($("input#add1").val());
    if (age >= 18) {
      $("#adult").show();
      $("#underage").hide();
    } else {
      $("#underage").show();
      $("#adult").hide();
    }   
    event.preventDefault();
    });
});

 