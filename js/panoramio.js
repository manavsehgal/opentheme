function initialize() {
  // The photoDiv defines the DIV within the info window for
  // displaying the Panoramio photo within its PhotoWidget.
  var photoDiv =  document.createElement('div');

  // The PhotoWidget width and height are expressed as number values,
  // not string values.
  var photoWidgetOptions = {
    width: 440,
    height: 300
  };

  // We construct a PhotoWidget here with a blank (null) request as we
  // don't yet have a photo to populate it.
  var photoWidget = new panoramio.PhotoWidget(photoDiv, null,
      photoWidgetOptions);

  var markers = [];
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(40.749956, -73.990991),
      new google.maps.LatLng(40.746168, -73.978508));
  map.fitBounds(defaultBounds);

  var infoWindow = new google.maps.InfoWindow();
  var panoramioLayer = new google.maps.panoramio.PanoramioLayer({
    suppressInfoWindows: true
  });

  panoramioLayer.setMap(map);

  var tag = document.getElementById('tag');

  google.maps.event.addDomListener(tag, 'input', function() {
    if (tag.value.length >= 3 || tag.value.length == 0) {
      panoramioLayer.setTag(tag.value);
    }
  });

  map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(
      document.getElementById('tag'));

  google.maps.event.addListener(panoramioLayer, 'click', function(e) {
    var photoRequestOptions = {
      ids: [{
        'photoId': e.featureDetails.photoId,
        'userId': e.featureDetails.userId
      }]
    };
    photoWidget.setRequest(photoRequestOptions);
    photoWidget.setPosition(0);
    infoWindow.setPosition(e.latLng);
    infoWindow.open(map);
    infoWindow.setContent(photoDiv);
  });

// Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);
