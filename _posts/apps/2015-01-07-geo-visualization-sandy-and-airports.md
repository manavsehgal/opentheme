---
# App Options
layout: fusion
title: Geo Visualization - Sandy and Airports
description: KML Map, Fusion Grid displaying live data. Hurricane Sandy impact cone, world Airport locations, and busiest airports.
category: app
image: /img/app/kml-sandy.png

# Grid Options
select: "col1, col2 as Location, col4"
from: "1hcqyroMjYXZfCqDTUq2nmhgwzG13W-BRzNXyaEk"
filter: "Location"

# KML Options
layers:
  - kml: "http://opentheme.co/static-data/WorldAirports.kml"
  - kml: "http://opentheme.co/static-data/287257.kml"
---

{% include kml-viewer.html %}
{% include fusion-filter-grid.html %}

<br>

This app was created in "zero coding", from configuration, using live open data sources, and reusing plugins created for OpenTheme.

{% highlight liquid linenos %}
{% raw  %}

  ---
  # App Options
  layout: fusion
  title: Geo Report - Sandy and Airports
  description: KML Map, Fusion Grid displaying live data...
  category: app
  
  # Grid Options
  select: "SELECT col1, col2 as Location, col4"
  from: "1hcqyroMjYXZfCqDTUq2nmhgwzG13W-BRzNXyaEk"
  where: "Location"
  
  # KML Options
  kml_source: "https://kml123.googlecode.com/files/WorldAirports.kml"
  kml_source2: "http://geocommons.com/overlays/287257.kml"
  ---
  
  {% include kml-viewer.html %}
  {% include fusion-filter-grid.html %}

{% endraw  %}
{% endhighlight %}
