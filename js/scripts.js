$(document).ready(function() {
  $("form#form1").submit(function (event) {
    event.preventDefault();
    var animals = $('#animals').val();
    if (animals === "Turtles"){
     $("#turtles").show();
   } else if (animals === "Snakes") {
     $("#snakes").show();
   } else if (animals === "Insects") {
     $("#insects").show();
   } else {
     $("#error").show();
   }
  });
});
