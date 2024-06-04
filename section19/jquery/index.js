$("h1").css("color", "red");

$("h2").css("padding", "10px");

$("button").css("margin", "10px", "solid", "blue");

$("input").keydown(function(event){
  $("h1").text(event.key);
});

