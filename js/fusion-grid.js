/*
  This OpenTheme.co code builds on Google sample code.
  
  --- Google Sample Copyright ---
  
  Copyright 2011 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

function drawTable() {
  var query_element = document.getElementById("fusion-grid");
  var select = query_element.getAttribute("data-select");
  var from = query_element.getAttribute("data-from");
  var where = query_element.getAttribute("data-where");
  var chart = query_element.getAttribute("data-chart");
  
  var query = select + ' FROM ' + from;
  var filter = document.getElementById('fusion-grid-filter').value;
  if (filter) {
    query += " WHERE '" + where + "' + CONTAINS IGNORING CASE + '" + filter + "'";
  }
  var queryText = encodeURIComponent(query);
  var gvizQuery = new google.visualization.Query(
      '//www.google.com/fusiontables/gvizdata?tq=' + queryText);

  gvizQuery.send(function(response) {
    var table = new google.visualization.Table(
        document.getElementById('fusion-grid'));
    table.draw(response.getDataTable(), {
      // https://developers.google.com/chart/interactive/docs/gallery/table#Configuration_Options
      showRowNumber: true,
      page: 'enable',
      pageSize: 20
    });
  });
  
  if (chart == 'bar') {
    var chart_element = document.getElementById("fusion-bar-chart");
    var compare = chart_element.getAttribute("data-compare");
    var chart_height = parseInt(chart_element.getAttribute("data-height"));
    var chart_title = compare + ' by ' + where;
    google.visualization.drawChart({
      containerId: 'fusion-bar-chart',
      dataSourceUrl: '//www.google.com/fusiontables/gvizdata?tq=',
      query: query,
      chartType: 'BarChart',
      options: {
        title: chart_title,
        height: chart_height,
        chartArea: {height: '80%'},
        vAxis: {
          title: where,
          viewWindowMode: 'pretty'
        },
        hAxis: {
          title: compare
        }
      }
    });
  }

}

google.setOnLoadCallback(drawTable);
