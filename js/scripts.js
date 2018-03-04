$(document).ready(function(){
  $( ".category" ).click(function() {
    $(this).find('.winner').toggleClass("red");
    $(this).find('img').toggle();
  });
});
