require.config({
  baseUrl: '/',
  shim : {
    "bootstrap" : { "deps" :['jquery'] }
  },
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

  $('#ContactForm').submit(function() { //.attr('action', 'javascript:void(0)')

    var ctxt = $(this);

    var name = $('#ContactName', ctxt).val();
    var email = $('#ContactEmail', ctxt).val();
    var message = $('#ContactMessage', ctxt).val();

    if (!name) {
      alert('Please enter your name');
      return false;
    } else if (!email) {
      alert('Please enter your email address');
      return false;
    } else if (!message) {
      alert('Please enter a message');
      return false;
    }
    return true;

    return $.ajax({
      method: 'POST',
      dataType: 'jsonp',
      url: 'http://ferns91.herokuapp.com/api/external/mailer/new',
      data: {
        api_mail: {
          applicaton: 'parente_painting',
          message: message,
          from: name + '<' + email + '>',
          subject: 'Message on ParentePainting.com',
          additional: 'Sent from parentepainting.com'
        }
      },
      error: function(err) {
        alert(err);
      },
      success: function(d) {
        console.log(d);
        $('#Modal').modal('hide');
      }
    })
  });

});
