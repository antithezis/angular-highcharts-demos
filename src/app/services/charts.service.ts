import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColumnChart } from '../intefaces/columnChartData';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private seriesOptions: Highcharts.Options = {};
  private dataUrl = "assets/data.json"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<ColumnChart>(this.dataUrl)
  }

  buildColumnChart(categories: any, porcentajes: any) {

    console.log(porcentajes)

    this.seriesOptions = {
      accessibility: {
        enabled: true,
      },
      chart: {
        zooming: {
          type: 'xy'
        },
        type: 'column',
        events: {
          load: function() {
            //alert('Cargando...');
          },
        },
      },

      credits: {
        enabled: false
      },

      navigator: {
        enabled: true
      },

      title: {
        text: 'Simulation chart',
      },
      xAxis: {
        max: 30,
        categories: categories
      },
      yAxis: [
        {
          min: 0,
          max: 100,
          labels: {
            format: '{value}%',
          },
          title: {
            text: 'Porcentaje de utilización',
          },
        },
      ],
      series: porcentajes,
      legend: {
        shadow: false,
      },
      tooltip: {
        useHTML: true,
        headerFormat:
          '<table><tr><th style="color:#FFFFFF"colspan="2">{point.key}</th></tr>',
        pointFormat:
          // '<tr><td style="color: {series.color}">{series.name} </td>' +
          '<tr><td style="color:#FFFFFF">{series.name} </td>' +
          '<td style="text-align: right; color:#FFFFFF"><b>{point.y} %</b></td></tr>',
        footerFormat: '</table>',
        shared: false,
        backgroundColor: '#001231',
      },

      plotOptions: {
        column: {
          turboThreshold: 50000000,
          grouping: false,
          shadow: false,
          borderWidth: 1.5,
          stacking: 'normal',
          opacity: 0.8,
          pointWidth: 13,
          pointPadding: 0.3,
          color: '#5574A8',
          dragDrop: {
            liveRedraw: true,
            draggableY: false,
            draggableX: true,
          },
        },
        series: {
          stickyTracking: false,
          point: {
            events: {
              drop: function(e: any) {
                this.update({
                  color: '#F47A04',
                });
              },
              click: function() {
              },
              dragStart: function(e: any) {
              },
              drag: function(e: any) {
              },
              mouseOver: function(e: any) {
              },
              // click: function (e: any) {
              //   debugger;
              // },
            },
          },
          states: {
            hover: {
              color: '#F47A04'
            }
          }
        },
      },
    }

    return this.seriesOptions

  }

  buildTwinChart(categories, porcentajes) {
    this.seriesOptions = {
      accessibility: {
        enabled: true,
      },
      chart: {
        zooming: {
          type: 'xy'
        },
        type: 'column',
        events: {
          load: function() {
            //alert('Cargando...');
          },
        },
      },

      credits: {
        enabled: false
      },

      navigator: {
        enabled: true
      },

      title: {
        text: 'Twin chart',
      },
      xAxis: {
        max: 30,
        categories: categories
      },
      yAxis: [
        {
          min: 0,
          max: 100,
          labels: {
            format: '{value}%',
          },
          title: {
            text: 'Porcentaje de utilización',
          },
        },
      ],
      series: porcentajes,
      legend: {
        shadow: false,
      },
      tooltip: {
        useHTML: true,
        headerFormat:
          '<table><tr><th style="color:#FFFFFF"colspan="2">{point.key}</th></tr>',
        pointFormat:
          // '<tr><td style="color: {series.color}">{series.name} </td>' +
          '<tr><td style="color:#FFFFFF">{series.name} </td>' +
          '<td style="text-align: right; color:#FFFFFF"><b>{point.y} %</b></td></tr>',
        footerFormat: '</table>',
        shared: false,
        backgroundColor: '#001231',
      },
      plotOptions: {
        column: {
          turboThreshold: 50000000,
          grouping: false,
          shadow: false,
          borderWidth: 1.5,
          stacking: 'normal',
          opacity: 0.8,
          pointWidth: 13,
          pointPadding: 0.3,
          color: '#5574A8',
        },
        series: {
          // stickyTracking: false,
          // point: {
          //   events: {
          //     drop: function(e: any) {
          //       this.update({
          //         color: '#F47A04',
          //       });
          //     },
          //     click: function() {
          //     },
          //     dragStart: function(e: any) {
          //     },
          //     drag: function(e: any) {
          //     },
          //     mouseOver: function(e: any) {
          //     },
          //     // click: function (e: any) {
          //     //   debugger;
          //     // },
          //   },
          // },
          // states: {
          //   hover: {
          //     color: '#F47A04'
          //   }
          // }
        },
      },
    }

    return this.seriesOptions

  }
}
