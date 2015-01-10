---
# App Options
layout: fusion
title: Fusion Grid Chart - Coffee Production
description: Data Grid and Chart Dashboard Displaying Data from Google Fusion Tables
author: Manav Sehgal
category: app
image: /img/app/fusion-grid-chart.png
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

This app example adds only three Frontmatter values to Fusion Grid app. 
Chart type, Horizontal Axis Title to compare values, Custom height of the chart.

{% include fusion-filter-grid.html %}
