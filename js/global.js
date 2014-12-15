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

/*******************************
          Cards
*******************************/


    $('.special.cards .image').dimmer({
      on: 'hover'
    });
    
    $('.ui.rating')
      .rating({
        maxRating: 5
      });

    $('.ui.rating')
      .rating('disable');
      
    $('.embed-features')
      .popup();

});