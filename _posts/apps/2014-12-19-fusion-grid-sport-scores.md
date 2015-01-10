---
# App Options
layout: fusion
title: Fusion Grid - Sport Scores
description: Data Grid displaying data from Google Fusion Tables
category: app
image: /img/app/fusion-grid.png
# Grid Options
select: "'Scoring Team' as Scoring, 'Minute of goal' as Minute, 'Receiving Team' as Receiving"
from: "1VlPiBCkYt_Vio-JT3UwM-U__APurJvPb6ZEJPg"
filter: "Scoring Team"
---
This is a sport scores sample app created using Fusion Tables.

Three simple steps to create this app.

1. Add one simple _include statement.
2. Specify the SELECT query identifying the Fusion Table by unique id.
3. Name the field to filter as Frontmatter, and you are done.

{% include fusion-filter-grid.html %}

You can author this single page app using Markdown. Pull data source from Google Fusion Tables. 
Visuaize and interact with the data source using Google Visualization API.

Features include:

- Data grid that updates as the source data on Fusion Tables changes.
- Filter on any field within the data source.
- Filter UI control designed using Semantic UI.
- Sort any column by clicking.
- Paginate large data sets.
- Serve from GitHub using Jekyll content workflow.
- Reusable _layout for Fusion Grid Filter apps.
- Reusable _include for filter and table control.
- JS parametrized to YAML Frontmatter. No changes required for new data sources.