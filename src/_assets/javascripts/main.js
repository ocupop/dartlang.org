//= require vendor/jquery-1.12.3.min
//= require bootstrap
//= require _utilities
//= require _search
//= require vendor/lunr.min.js
//= require vendor/code-prettify/prettify
//= require vendor/code-prettify/lang-dart
//= require vendor/code-prettify/lang-yaml

var condensedHeaderHeight = 50;
var tocToSidenavDiff = 50;

function fixNav() {
  var t = $(document).scrollTop(),
      f = $("#page-footer").offset().top,
      h = window.innerHeight,
      // space between scroll position and top of the footer
      whenAtBottom = f - t,
      mh = Math.min(h, whenAtBottom) - condensedHeaderHeight;
  $("#sidenav").css({maxHeight: mh});
  $("#toc").css({maxHeight: mh - tocToSidenavDiff});
}

// Add scroll on page load for hash
$(window).on('load', function (e){
  // window.scrollTo(0, 0);
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
  fixNav();
  var currentScreenPosition = $(document).scrollTop();
  if(currentScreenPosition > 50) {
    $('body').addClass('condensed_header');
  } else {
    $('body').removeClass('condensed_header');
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

  // Sidenav
  $('#sidenav i').on('click', function(e) {
    window.console.log("CLICKED");
    e.preventDefault();
    $(this).parent('li').toggleClass('active');
  });

  // TOC: Table of Contents
  $('.toc-entry').not('.toc-h2').remove();
  $('.section-nav').addClass('nav').css({opacity: 1});

  $('body').scrollspy({
     offset: 100,
     target: '#toc'
  });

  $('#toc').on('activate.bs.scrollspy', function () {
    // do something…
  });

  $('#toc a[href^="#"]').click(function() {
      var target = $(this.hash);
      var hash = this.hash;
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-70 }, 500, function (){
          location.hash = hash;
      });
      // Mark as active
      // $('a[href^="#"]').parent('li').removeClass('active');
      $(this).parent('li').addClass('active');
      return false;
  });
  
  // Popovers
  $('[data-toggle="popover"], .dart-popover').popover()

  // open - close mobile navigation
  $('#menu-toggle').on('click', function(e) {
    e.stopPropagation();
    $("body").toggleClass('open_menu');
  });

  $("#page-content").on('click', function() {
    if ($('body').hasClass('open_menu')) {
      $('body').removeClass("open_menu");
    }
  });

  $(window).smartresize(fixNav());

  // Add external link indicators
  $('a[target="_blank"]').addClass('external');
  $('a[href^="http"]').addClass('external');

});

