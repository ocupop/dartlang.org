//= require vendor/jquery-1.12.3.min
//= require bootstrap
//= require vendor/code-prettify/prettify
//= require vendor/code-prettify/lang-dart
//= require vendor/jquery.stickit.min

$(window).on('load', function (e){
  window.scrollTo(0, 0);
  if (window.location.hash) {
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top-70 }, 500, function (){
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
  });
  $('.highlight').mouseleave(function(){
    $('#code-display p').text('Hover over code snippet on the left to learn more.');
  });

  $('#toc i').on('click', function(e) {
    window.console.log("CLICKED");
    e.preventDefault();
    $(this).parent('li').toggleClass('open');
  });

  // Add scroll animations
  $('a[href^="#"]').click(function() {
      var target = $(this.hash);
      var hash = this.hash;
      if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
      if (target.length == 0) target = $('html');
      $('html, body').animate({ scrollTop: target.offset().top-80 }, 500, function (){
          location.hash = hash;
          // Mark as active
          $('a[href^="#"]').removeClass('active');
          $(this).addClass('active');
      });
      return false;
  });

  // // initiate stick behaviour
  // $(".sticky").stickit({
  //   top: 50
  // });
  $("#toc").stickit({
    top: 50
  });
  // $("#pagenav").stickit({
  //   top: 60
  // });
  // $("#subnav").stickit({
  //   top: 0
  // });


  $(function () {
    $('[data-toggle="popover"]').popover()
  });

});

$(document).ready(function() {
  $.getJSON(
    "https://storage.googleapis.com/dart-archive/channels/dev/release/latest/VERSION",
    function( data ) {
        var date = data.date;
        var revDate = date.substr(0,4) + "-" + date.substr(4,2) + "-" + date.substr(6,2);
        $(".dev-channel").append($("<strong></strong>").text("version " +data.version))
                         .append($("<span></span>").text(", built on " + revDate))
                         .append($("<span></span>").text(", at revision " + data.revision));
  });
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