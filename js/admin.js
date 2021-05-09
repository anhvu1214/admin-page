google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Sales'],
        ['Jan', 1000],
        ['Feb', 460],
        ['Mar', 660],
        ['Apr', 540],
        ['May', 1000],
        ['Jun', 460],
        ['Jul', 660],
        ['Aug', 540],
        ['Sep', 1000],
        ['Oct', 1170],
        ['Nov', 1120],
        ['Dep', 540]
    ]);

    var options = {
        chartArea: { left: 60, top: 20, right: 30, bottom: 40 },
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
}

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Month', 'Books'],
        ['Jan', 20],
        ['Feb', 40],
        ['Mar', 60],
        ['Apr', 50],
        ['May', 100],
        ['Jun', 40],
        ['Jul', 60],
        ['Aug', 50],
        ['Sep', 100],
        ['Oct', 10],
        ['Nov', 10],
        ['Dep', 50]
    ]);

    var options = {
        chartArea: { left: 60, top: 50, right: 40, bottom: 40 },
        legend: { position: 'none' },
        axes: {
            x: {
                0: { side: 'bottom' } // Top x-axis.
            }
        },
        bar: { groupWidth: "30%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};

$(window).resize(function() {
    drawChart();
    drawStuff();
})