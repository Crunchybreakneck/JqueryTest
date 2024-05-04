$(document).ready(function(){
$('#background').click(function(){
  $('body').toggleClass('altBackground')
$( ".header" ).append( "<p>Test</p>" );
});
  $(".text").mouseenter(function(){
  alert("You found the text!");
});
});
