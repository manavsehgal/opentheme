$(document)
  .ready(function() {

    var
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      });

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