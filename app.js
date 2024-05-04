$(document).ready(function(){
$('#background').click(function(){
  $('body').toggleClass('altBackground')
$( ".header" ).append( "<p>Test</p>" );
});
   $("header").keypress(function(){
 $( ".header" ).append( "<p>Key pressed</p>" );
  });
});
