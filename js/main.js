$(document).ready(function(){
    var _url = "https://my-json-server.typicode.com/magus123/pwaapi/products"

    var dataResults = ''
    var catResults = ''
    var categories = []

    $.get(_url, function(data){

        $.each(data, function(key, items)
        {
            _cat = items.category;

            dataResults += "<div>"
                        + "<h3>" + items.name + "</h3>"
                        + "<p>" + items.category +"</p>"
                        "<div>";

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat)
                catResults += "<option value'"+ _cat +"'>" + _cat + "</option>"
            }

        })
    //  $('#product').html(dataResults)
     $('#cat_select').html("<option value='all'>semua</option>" + catResults)
    })

    //fungsi filter
    $("#cat_select").on('change', function(){
        updateProduct($(this).val())
    })

    function updateProduct(cat){
        
        var dataResults = ''
        var _newurl = _url

        if(cat != 'all')
        _newurl = _url + "?category=" + cat

        $.get(_newurl, function (data){

            $.each(data, function (key, items){
                _cat = items.category

                dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>"
                            "<div>";
        }) 

        $('#product').html(dataResults)

      })
    }//end document jquery

    //tespiehighchart1
$(function () {
    $('#container').highcharts({
        
        title: {
            text: 'Dashboard 1 BTN'
        },
        chart: {
            type: 'pie'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            location.href = this.options.url;
                        }
                    }
                }
            }
        },
        
        series: [{
            data: [{
                y: 1000,
                url: 'view/test.html'
            }, {
                y: 100.5,
                url: 'http://bing.com/search?q=bar'
            }, {
                y: 106.4,
                url: 'http://bing.com/search?q=foo+bar'
            }]        
        }]
    });
  });

   //tespiehighchart2
$(function () {
    $('#container2').highcharts({
        
        title: {
            text: 'Dashboard 2 BTN'
        },
        chart: {
            type: 'pie'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            location.href = this.options.url;
                        }
                    }
                }
            }
        },
        
        series: [{
            data: [{
                y: 1000,
                url: 'view/test.html'
            }, {
                y: 100.5,
                url: 'http://bing.com/search?q=bar'
            }, {
                y: 106.4,
                url: 'http://bing.com/search?q=foo+bar'
            }]        
        }]
    });
  });

    //tespiehighchart3
    $(function () {
        $('#container3').highcharts({
    //Highcharts.chart('container', {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Dashboard 3 BTN'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value} °C',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
    
        tooltip: {
            shared: true
        },
    
        series: [{
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f} mm</b> '
            }
        }, {
            name: 'Rainfall error',
            type: 'errorbar',
            yAxis: 1,
            data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
            }
        }, {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.1f}°C</b> '
            }
        }, {
            name: 'Temperature error',
            type: 'errorbar',
            data: [[6, 8], [5.9, 7.6], [9.4, 10.4], [14.1, 15.9], [18.0, 20.1], [21.0, 24.0], [23.2, 25.3], [26.1, 27.8], [23.2, 23.9], [18.0, 21.1], [12.9, 14.0], [7.6, 10.0]],
            tooltip: {
                pointFormat: '(error range: {point.low}-{point.high}°C)<br/>'
            }
        }]
    });
  });
}) 


//PWAServiceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
