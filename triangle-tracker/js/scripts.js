$(document).ready(function(){
    $("form#form").submit(function() {

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    
    if (side1 === side2 && side2 === side3) {
        alert("This is an Equilateral Triangle");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        alert("This is an Isosceles Triangle");
    } else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        alert("This is not a Triangle");
    } else if (side1 != side2 && side1  !=side3 && side2 != side3) {
        alert("This is a Scalene Triangle");
    }  
    });
})