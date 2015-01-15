require.config({
  baseUrl: '/',
  paths: {
    // the left side is the module ID,
    // the right side is the path to
    // the jQuery file, relative to baseUrl.
    // Also, the path should NOT include
    // the '.js' file extension. This example
    // is using jQuery 1.9.0 located at
    // js/lib/jquery-1.9.0.js, relative to
    // the HTML page.
    jquery: 'components/jquery/dist/jquery.min',
    bootstrap: 'components/bootstrap-sass/assets/javascripts/bootstrap',
    flexslider: 'components/flexslider/jquery.flexslider-min'
  }
});

require(['jquery', 'bootstrap'], function($) {

  $('#contact-btn').click(function() {
    $('#Modal').modal();
  });

});
