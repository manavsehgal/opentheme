$(document)
  .ready(function() {

/*******************************
          Global
*******************************/

    $('.sidebar').first()
      .sidebar('attach events', '.pagebar')
    ;
    
    $('.pagebar')
      .removeClass('disabled')
    ;


/*******************************
          Post
*******************************/

    $('.posthead .information')
      .transition('scale in', 1000)
    ;


/*******************************
          Landing
*******************************/

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
      })
    ;

    $('.masthead .information')
      .transition('scale in', 1000)
    ;
