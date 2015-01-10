---
# App Options
layout: fusion
title: Fusion Map Grid Chart - Coffee Production
description: Data Map, Grid and Chart Dashboard Displaying Data from Google Fusion Tables
category: app
image: /img/app/fusion-map-grid-chart.png
# Grid Options
select: "Country, '2000/01' as Y2000, '2001/02' as Y2001, '2002/03' as Y2002, '2003/04' as Y2003, '2004/05' as Y2004, '2005/06' as Y2005, '2006/07' as Y2006, '2007/08' as Y2007, '2008/09' as Y2008"
from: "12Ky51FcTdAPYsnP42k3N4AtEB8EcxxfLMJ5rAnU"
filter: "Country"
# Chart Options
chart: bar
compare: "Coffee Production"
chart_height: 1200
---
This is a coffee production sample app created using Fusion Tables. 
Filter on part or full country name, or common text in multiple countries to update custom dashboard chart.

This app example adds embed iframe from Fusion Tables for visualizing the map representing the data.
Only change required is width/height values to match page theme. 
Suggested 100% width for responsive view. Height to adjust to map data.

<iframe width="100%" height="400" scrolling="no" frameborder="no" 
src="https://www.google.com/fusiontables/embedviz?q=select+col11+from+12Ky51FcTdAPYsnP42k3N4AtEB8EcxxfLMJ5rAnU&amp;viz=MAP&amp;h=false&amp;lat=8.769762156504258&amp;lng=91.99385124999992&amp;t=1&amp;z=2&amp;l=col11&amp;y=3&amp;tmplt=4&amp;hml=GEOCODABLE"></iframe>

{% include fusion-filter-grid.html %}
