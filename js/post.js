$(document).ready(function() {

  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });
  
  config = {
      ui: {
        flyout: "middle right"
      },
      networks: {
          facebook: {
              app_id: "390272554479803"
          }
      }
  }
  
  var share = new Share('.share-button', config);

});