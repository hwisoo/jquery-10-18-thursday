$(document).ready(function(){
$("#form").submit(function(){

   
event.preventDefault();

var genre = $("input:radio[name=genre]:checked").val();
var decade = $("input:radio[name=decade]:checked").val();
var suggestion;

if(genre === "action" && decade === "1980s") {
    suggestion = "You should watch the Terminator."
} else if (genre === "action" && decade === "1990s") {
    suggestion = "You should watch the Terminator."
} else if (genre === "action" && decade === "2000s") {
    suggestion = "You should watch the Terminator."
} else if (genre === "action" && decade === "2010s") {
    suggestion = "You should watch the Terminator."
}

if(genre === "horror" && decade === "1980s") {
    suggestion = "You should watch the Ring."
} else if (genre === "horror" && decade === "1990s") {
    suggestion = "You should watch the Ring."
} else if (genre === "horror" && decade === "2000s") {
    suggestion = "You should watch the Ring."
} else if (genre === "horror" && decade === "2010s") {
    suggestion = "You should watch the Ring."
}

if(genre === "romance" && decade === "1980s") {
    suggestion = "You should watch Ghost."
} else if (genre === "romance" && decade === "1990s") {
    suggestion = "You should watch Ghost."
} else if (genre === "romance" && decade === "2000s") {
    suggestion = "You should watch Ghost."
} else if (genre === "romance" && decade === "2010s") {
    suggestion = "You should watch Ghost."
}

if(genre === "comedy" && decade === "1980s") {
    suggestion = "You should watch Dumb and Dumber."
} else if (genre === "comedy" && decade === "1990s") {
    suggestion = "You should watch Dumb and Dumber."
} else if (genre === "comedy" && decade === "2000s") {
    suggestion = "You should watch Dumb and Dumber."
} else if (genre === "comedy" && decade === "2010s") {
    suggestion = "You should watch Dumb and Dumber."
}

$("#result").text(suggestion);
});
});

