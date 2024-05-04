$(document).ready(function(){
$('#background').click(function(){
  $('body').toggleClass('altBackground')
$( ".header" ).append( "<p>Test</p>" );
});
   $("input").keydown(function(){
 $( ".header" ).append( "<p>Key pressed</p>" );
  });
});
