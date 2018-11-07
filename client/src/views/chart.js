var Highcharts = require('highcharts');
var ResultView = require('./result_view.js');
const Chart = function() {};

console.log(ResultView.points);
Chart.prototype.render = function (points) {

Highcharts.chart('chart', {
    chart: {
      renderTo: 'chart',
        type: 'column'
    },
    title: {
        text: 'Points from last three games'
    },

    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Points'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,

            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> Points<br/>'
    },
    "series": [
        {
            "name": "Game",
            "colorByPoint": true,
            "data": [
                {
                    "name": "1",
                    "y": points,

                },
                {
                    "name": "2",
                    "y": 10,

                },
                {
                    "name": "3",
                    "y": 30,

                }
            ]
        }
    ],

});
};



module.exports = Chart;
