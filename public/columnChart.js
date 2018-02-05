var ColumnChart = function(columnTitle, columnSeries, columnCategories){
  var container = document.querySelector('#column-chart');

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: columnTitle
    },
    series: columnSeries,
    xAxis: {
      categories: columnCategories
    }

  });


}
