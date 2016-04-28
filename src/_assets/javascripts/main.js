//= require vendor/jquery-1.12.3.min
//= require bootstrap
//= require vendor/code-prettify/prettify
//= require vendor/code-prettify/lang-dart
//= require vendor/code-prettify/lang-yaml
//= require vendor/jquery.stickit.min


// Add scroll on page load for hash
$(window).on('load', function (e){
  window.scrollTo(0, 0);
  if (window.location.hash) {
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top-70 }, 500, function (){
      // Mark as active
        $('a[href^="#"]').parent('li').removeClass('active');
        $('a[href="'+window.location.hash+'"]').parent('li').addClass('active');
    });
  }
});

// When a user scrolls to 50px add class  condensed-header to body
$(window).scroll(function(){
  var currentScreenPosition  = $(document).scrollTop();

  if(currentScreenPosition > 50) {
    $('#page-header').addClass('condensed');
  } else {
    $('#page-header').removeClass('condensed');
  }
});


$(document).on('ready', function(){
  // Initiate Syntax Highlighting
  prettyPrint();
  $('.highlight').mouseenter(function(){
    var text = $(this).data('text');
    $('#code-display p').text(text);
  });
  $('.highlight').mouseleave(function(){
    $('#code-display p').text('Hover over code snippet on the left to learn more.');
  });

  // TOC: Table of Contents
  $('.toc-entry').not('.toc-h2').remove();
  $('.section-nav').addClass('nav');
  $('#toc').on('activate.bs.scrollspy', function () {
    // do something…
  });
  $('#toc i').on('click', function(e) {
    window.console.log("CLICKED");
    e.preventDefault();
    $(this).parent('li').toggleClass('active');
  });

  // TOC: Add scroll animations
  $('#toc a[href^="#"]').click(function() {
      var target = $(this.hash);
      var hash = this.hash;
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-70 }, 500, function (){
          location.hash = hash;
          // Mark as active
          $('a[href^="#"]').parent('li').removeClass('active');
          $(this).parent('li').addClass('active');
      });
      return false;
  });

  // Initiate sticky behaviour
  $("#toc").stickit({
    top: 70
  });

  // Initiate Popovers
  $('[data-toggle="popover"], .dart-popover').popover()

});