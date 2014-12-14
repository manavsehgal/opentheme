$(document).ready(function() {

  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });

});