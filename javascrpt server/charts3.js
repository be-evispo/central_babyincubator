function charts3() {
    var chartS = new Highcharts.Chart({
        chart: {
            renderTo: 'Skin3',
            backgroundColor: '#16181d',
        },
        title: {
            text: 'Skin',
            style: { color: '#8f9195' },
        },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: { fontSize: 10, textOutline: false }
                }
            },
            series: { color: '#059e8a' }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%M:%S' }
        },
        yAxis: {
            tickInterval: 5,
            title: { text: '(Celsius)' }
            //title: { text: 'Temperature (Fahrenheit)' }
        },
        credits: { enabled: false }

    });


    setInterval(function () {
        var x = (new Date()).getTime(),
            y = parseFloat(document.getElementById("cSskin3").innerHTML);
        //console.log(this.responseText);
        if (chartS?.series[0]?.data.length > 10) {
            chartS?.series[0]?.addPoint([x, y], true, true, true);
        } else {
            chartS?.series[0]?.addPoint([x, y], true, false, true);
        }
    }, 1000);


    var chartC = new Highcharts.Chart({
        chart: {
            renderTo: 'Chamber3',
            backgroundColor: '#16181d',
        },
        title: { text: 'Chamber' },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                color: '#FFFFFF',
                dataLabels: {
                    enabled: true,
                    style: { fontSize: 10, textOutline: false }
                }
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            tickInterval: 5,
            title: { text: '(Celcius)' }
        },
        credits: { enabled: false }
    });


    setInterval(function () {
        var x2 = (new Date()).getTime(),
            y2 = parseFloat(document.getElementById("cSchamber3").innerHTML);
        //console.log(this.responseText);
        if (chartC?.series[0]?.data.length > 10) {
            chartC?.series[0]?.addPoint([x2, y2], true, true, true);
        } else {
            chartC?.series[0]?.addPoint([x2, y2], true, false, true);
        }
    }, 1000);

    var chartH = new Highcharts.Chart({
        chart: {
            renderTo: 'Humadity3',
            backgroundColor: '#16181d',
        },
        title: { text: 'Humadity' },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: { fontSize: 10, textOutline: false }
                }
            },
            series: { color: '#18009c' }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            tickInterval: 5,
            title: { text: '(%)' }
        },
        credits: { enabled: false }
    });

    setInterval(function () {
        var x3 = (new Date()).getTime(),
            y3 = parseFloat(document.getElementById("chumadity3").innerHTML);
        //console.log(this.responseText);
        if (chartH?.series[0]?.data.length > 10) {
            chartH?.series[0]?.addPoint([x3, y3], true, true, true);
        } else {
            chartH?.series[0]?.addPoint([x3, y3], true, false, true);
        }
    }, 1000);

    var chartN = new Highcharts.Chart({
        chart: {
            renderTo: 'Noise3',
            backgroundColor: '#16181d',
        },
        title: { text: 'Noise' },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: { fontSize: 10, textOutline: false }
                }
            },
            series: { color: '#18009c' }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            tickInterval: 5,
            title: { text: '(dB)' }
        },
        credits: { enabled: false }
    });

    setInterval(function () {
        var x4 = (new Date()).getTime(),
            y4 = parseFloat(document.getElementById("cnoise3").innerHTML);
        //console.log(this.responseText);
        if (chartN?.series[0]?.data.length > 10) {
            chartN?.series[0]?.addPoint([x4, y4], true, true, true);
        } else {
            chartN?.series[0]?.addPoint([x4, y4], true, false, true);
        }
    }, 1000);
}