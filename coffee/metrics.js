---
---
$('.percent').progress();

// ====== PageSpeed API - Desktop =====

// Specify your actual API key here:
var API_KEY = '{{ site.google_api_key}}';

// Specify the URL you want PageSpeed results for here:
var URL_TO_GET_RESULTS_FOR = 'http://opentheme.co/';

var API_URL = 'https://www.googleapis.com/pagespeedonline/v1/runPagespeed?';

// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
var callbacks = {}

// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.
function runPagespeed() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + URL_TO_GET_RESULTS_FOR,
    'callback=runPagespeedCallbacks',
    'key=' + API_KEY,
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == '{{ site.google_api_key}}') {
        alert('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        alert(errors[i].message);
      }
    }
    return;
  }

  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks) {
    var f = callbacks[fn];
    if (typeof f == 'function') {
      callbacks[fn](result);
    }
  }
}

// Invoke the callback that fetches results. Async here so we're sure
// to discover any callbacks registered below, but this can be
// synchronous in your code.
setTimeout(runPagespeed, 0);

callbacks.displayPageSpeedScore = function(result) {
    $( ".desktop-pagespeed" ).attr( "data-percent", result.score.toString() );
    $( ".desktop-pagespeed-value" ).text( "*" + result.score.toString() );
    $('.desktop-pagespeed').progress();

    var results = [];
    var ruleResults = result.formattedResults.ruleResults;
    for (var i in ruleResults) {
      var ruleResult = ruleResults[i];
      // Don't display lower-impact suggestions.
      if (ruleResult.ruleImpact < 3.0) continue;
      results.push({name: ruleResult.localizedRuleName,
                    impact: ruleResult.ruleImpact});
    }
    results.sort(sortByImpact);
    var r = "";
    for (var i = 0, len = results.length; i < len; ++i) {
      r = r + "<li>" + results[i].name + "</li>";
    }
    var ul = "<ul>" + r + "</ul>";

    if (ul.length > 9) {
      $(".desktop-suggestions").html("<h4>Suggestions to Improve</h4>" + ul);
    } else {
      $(".desktop-suggestions").text('<h4>No high impact suggestions. Good job!</h4>');
    }

};    

// ====== PageSpeed API - Mobile =====

// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
var callbacks_m = {}

// Invokes the PageSpeed Insights API. The response will contain
// JavaScript that invokes our callback with the PageSpeed results.
function runPagespeed_m() {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  var query = [
    'url=' + URL_TO_GET_RESULTS_FOR,
    'strategy=mobile',
    'callback=runPagespeedCallbacks_m',
    'key=' + API_KEY,
  ].join('&');
  s.src = API_URL + query;
  document.head.insertBefore(s, null);
}

// Our JSONP callback. Checks for errors, then invokes our callback handlers.
function runPagespeedCallbacks_m(result) {
  if (result.error) {
    var errors = result.error.errors;
    for (var i = 0, len = errors.length; i < len; ++i) {
      if (errors[i].reason == 'badRequest' && API_KEY == '{{ site.google_api_key}}') {
        alert('Please specify your Google API key in the API_KEY variable.');
      } else {
        // NOTE: your real production app should use a better
        // mechanism than alert() to communicate the error to the user.
        alert(errors[i].message);
      }
    }
    return;
  }

  // Dispatch to each function on the callbacks object.
  for (var fn in callbacks_m) {
    var f = callbacks_m[fn];
    if (typeof f == 'function') {
      callbacks_m[fn](result);
    }
  }
}

// Invoke the callback that fetches results. Async here so we're sure
// to discover any callbacks registered below, but this can be
// synchronous in your code.
setTimeout(runPagespeed_m, 0);

callbacks_m.displayPageSpeedScore = function(result) {
    $( ".mobile-pagespeed" ).attr( "data-percent", result.score.toString() );
    $( ".mobile-pagespeed-value" ).text( "*" + result.score.toString() );
    $('.mobile-pagespeed').progress();

    var results = [];
    var ruleResults = result.formattedResults.ruleResults;
    for (var i in ruleResults) {
      var ruleResult = ruleResults[i];
      // Don't display lower-impact suggestions.
      if (ruleResult.ruleImpact < 3.0) continue;
      results.push({name: ruleResult.localizedRuleName,
                    impact: ruleResult.ruleImpact});
    }
    results.sort(sortByImpact);
    var r = "";
    for (var i = 0, len = results.length; i < len; ++i) {
      r = r + "<li>" + results[i].name + "</li>";
    }
    var ul = "<ul>" + r + "</ul>";

    if (ul.length > 9) {
      $(".mobile-suggestions").html("<h4>Suggestions to Improve</h4>" + ul);
    } else {
      $(".mobile-suggestions").text('<h4>No high impact suggestions. Good job!</h4>');
    }

  
};    

// Helper function that sorts results in order of impact.
function sortByImpact(a, b) { return b.impact - a.impact; }

// ====== ListJS ======

var options = {
  valueNames: [ 'category', 'title' ]
};

var metricsList = new List('metrics-list', options);

$('.filter-all').click(function() {
    metricsList.filter();
    $('.sort').removeClass( "disabled" );
    $('.filter-all').addClass( "active" );
    $('.filter-reusability').removeClass( "active" );
    $('.filter-usability').removeClass( "active" );
    $('.filter-learnability').removeClass( "active" );
    $('.filter-performance').removeClass( "active" );
    $('.filter-reliability').removeClass( "active" );
    return false;
});

$('.filter-reusability').click(function() {
    metricsList.filter(function(item) {
        
        if (item.values().category === "Reusability") {
            $('.sort').addClass( "disabled" );
            $('.filter-all').removeClass( "active" );
            $('.filter-reusability').addClass( "active" );
            $('.filter-usability').removeClass( "active" );
            $('.filter-learnability').removeClass( "active" );
            $('.filter-performance').removeClass( "active" );
            $('.filter-reliability').removeClass( "active" );
            return true;
        } else {
            return false;
        }
    });
    return false;
});


$('.filter-usability').click(function() {
    metricsList.filter(function(item) {
        
        if (item.values().category === "Usability") {
            $('.sort').addClass( "disabled" );
            $('.filter-all').removeClass( "active" );
            $('.filter-reusability').removeClass( "active" );
            $('.filter-usability').addClass( "active" );
            $('.filter-learnability').removeClass( "active" );
            $('.filter-performance').removeClass( "active" );
            $('.filter-reliability').removeClass( "active" );
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('.filter-learnability').click(function() {
    metricsList.filter(function(item) {
        
        if (item.values().category === "Learnability") {
            $('.sort').addClass( "disabled" );
            $('.filter-all').removeClass( "active" );
            $('.filter-reusability').removeClass( "active" );
            $('.filter-usability').removeClass( "active" );
            $('.filter-learnability').addClass( "active" );
            $('.filter-performance').removeClass( "active" );
            $('.filter-reliability').removeClass( "active" );
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('.filter-performance').click(function() {
    metricsList.filter(function(item) {
        
        if (item.values().category === "Performance") {
            $('.sort').addClass( "disabled" );
            $('.filter-all').removeClass( "active" );
            $('.filter-reusability').removeClass( "active" );
            $('.filter-usability').removeClass( "active" );
            $('.filter-learnability').removeClass( "active" );
            $('.filter-performance').addClass( "active" );
            $('.filter-reliability').removeClass( "active" );
            return true;
        } else {
            return false;
        }
    });
    return false;
});

$('.filter-reliability').click(function() {
    metricsList.filter(function(item) {
        
        if (item.values().category === "Reliability") {
            $('.sort').addClass( "disabled" );
            $('.filter-all').removeClass( "active" );
            $('.filter-reusability').removeClass( "active" );
            $('.filter-usability').removeClass( "active" );
            $('.filter-learnability').removeClass( "active" );
            $('.filter-performance').removeClass( "active" );
            $('.filter-reliability').addClass( "active" );
            return true;
        } else {
            return false;
        }
    });
    return false;
});