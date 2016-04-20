//= require vendor/jquery-1.11.3.min
//= require vendor/jquery.stickit.min
//= require vendor/prettify

$(window).on('load', function (e){
  window.scrollTo(0, 0);
  if (window.location.hash) {
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top-80 }, 800, function (){
      // Mark as active
      $('a[href^="#"]').removeClass('active');
      $('a[href="'+window.location.hash+'"]').addClass('active');
    });
  }
});


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


  // Add scroll animations
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      var hash = this.hash;
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-80 }, 500, function (){
          location.hash = hash;
      });
      return false;
  });

  // initiate stick behaviour
  $(".sticky").stickit({
    top: 50
  });
  $("#toc").stickit({
    top: 50
  });
  $("#pagenav").stickit({
    top: 60
  });
  $("#subnav").stickit({
    top: 0
  });

  $('.dropdown-toggle').on('click', function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('open');
  });

});


// When a user scrolls to 50px add class  condensed-header to body
$(window).scroll(function(){
  var currentScreenPosition  = $(document).scrollTop();

  if(currentScreenPosition > 50) {
    $('body').addClass('condensed-header');
  } else {
    $('body').removeClass('condensed-header');
  }
});