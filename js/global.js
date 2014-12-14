$(document)
  .ready(function() {

/*******************************
          Global
*******************************/

    $('.sidebar').first()
      .sidebar('attach events', '.pagebar');
    
    $('.pagebar')
      .removeClass('disabled');

    $('.masthead .information')
      .transition('scale in', 1000);


});