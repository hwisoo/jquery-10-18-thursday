$(function() {
    $("form#add").submit(function() {
    var age = $("input#add1").val();

    if (age) {

      if (age >= 18) {
      $("#adult").show();
      $("#underage").hide();

    } else if (age < 18) {
      $("#underage").show();
      $("#adult").hide();

    }};
    
    if (!age) {
    alert("Please enter age!")
    }

    event.preventDefault();

    });
   

 
});

 