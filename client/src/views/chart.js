var Highcharts = require('highcharts');
var ResultView = require('./result_view.js');
const Chart = function() {};

// console.log(ResultView.points);
Chart.prototype.render = function (lastGame, PreviousTwo) {

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
                    "name": lastGame.game,
                    "y": lastGame.points

                },
                {
                    "name": PreviousTwo[0].game,
                    "y": PreviousTwo[0].points

                },
                {
                    "name": PreviousTwo[1].game,
                    "y": PreviousTwo[1].points

                }
            ]
        }
    ],

});
};



module.exports = Chart;
