$(document).ready(function(){
    $("#form").submit(function(){
       console.log("Ok");
        var animal = $("#myselect").val();

        if(animal){
            if(animal === "1"){
                $("#elephant").hide();
                $("#whale").hide();
                $("#tiger").fadeIn(1500);
               
            } else if (animal === "2"){
                $("#tiger").hide();
                $("#whale").hide();
                $("#elephant").fadeIn(1500);
            } else if (animal === "3"){
                $("#tiger").hide();
                $("#elephant").hide();
                $("#whale").fadeIn(1500);
            }
        }

        event.preventDefault();
    });
});