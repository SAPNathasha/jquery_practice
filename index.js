$("h1").css("color", "red");

$(document).ready(function(){
    $("h1").css("color" , "red");
});

$("h1").addClass("big-title");
$("h1").removeClass("big-title");
$("h1").addClass("big-class margine-50");
$("h1").hasClass("margine-50");

$("h1").text("Bye");

$("a").attr("href", "www.google.com");


$("button").click(function(){
    $("h1").css("color" , "red");
});

$("input").keypress(function(event){
    //do something
});