$(document).ready(function() {

  $("#login").click(function() {
    $.post( '/login', { email: 'olive@gmail.com', password: 'olive123' })
    .fail(function(data) {
      console.log(data.status);
    })
    .done(function( data) {
      console.log( 'Data Loaded: ' + JSON.stringify(data) );
      window.location.href = '/user/home';
    });
  });

  $("#logout").click(function() {
    $.get('/logout')
    .done(function(data) {
      if(typeof data.redirect === 'string'){
        window.location = data.redirect
      }
    });
  });


});
