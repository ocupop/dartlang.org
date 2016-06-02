jQuery(function() {
  // Initalize lunr with the fields it will be searching on. I've given title
  // a boost of 10 to indicate matches on this field are more important.
  window.idx = lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('url');
    this.field('description');
    this.field('type');
  });

  // Download the data from the JSON file we generated
  window.data = $.getJSON("{{ '/f/search.json' | prepend: site.baseurl }}");

  // Wait for the data to load and add it to lunr
  window.data.then(function(loaded_data){
    $.each(loaded_data, function(index, value){
      window.idx.add(
        $.extend({ "id": index }, value)
      );
    });
  });

  $('#search').on('keyup', function(){
    if($(this).val().length !=0) {
      $(this).parent().addClass('active');
    } else {
      $(this).parent().removeClass('active');
    }
  });

  // Event when the form is submitted
  $(".searchfield button").on('click', function(){
    event.preventDefault();
    var query = $("#search").val(); // Get the value for the text field
    var results = window.idx.search(query); // Get lunr to perform a search
    window.console.log(results);
    display_search_results(results); // Hand the results off to be displayed
  });

  $("#site-search-results button").on('click', function() {
    $("#page-content").fadeIn('slow');
    $("#site-search-results").fadeOut('fast');
  });

  function display_search_results(results) {
    var $search_results = $("#search-results");

    // Wait for data to load
    window.data.then(function(loaded_data) {

      // Are there any results?
      if (results.length) {
        $search_results.empty(); // Clear any old results

        // Iterate over the results
        results.forEach(function(result) {
          var item = loaded_data[result.ref];

          // Build a snippet of HTML for this result
          var appendString = '<li>';
              appendString += '<h2><a href="' + item.url + '">'+ item.title +'</a></h2>';
              appendString += '<p><em>'+ item.url +'</em></p>';
              appendString += '<p>'+ item.description +'</p>';
              appendString += '</li>';

          // Add it to the results
          $search_results.append(appendString);
          $("#page-content").hide();
          $("#site-search-results").fadeIn();
        });
      } else {
        $search_results.empty(); // Clear any old results
        $search_results.append('<li>No results found</li>');
        $("#site-search-results").fadeIn();
      }
    });
  }
});