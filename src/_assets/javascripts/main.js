//= require vendor/jquery-1.11.3.min
//= require vendor/prettify


$(document).on('ready', function(){
  prettyPrint();
  $('.highlight').mouseenter(function(){
    var text = $(this).data('text');
    $('#code-display p').text(text);
    window.console.log(text);
  });
  $('.highlight').mouseleave(function(){
    $('#code-display p').text('Hover over code snippet on the left to learn more.');
  });
});