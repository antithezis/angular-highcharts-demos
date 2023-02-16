import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  private seriesOptions: Highcharts.Options = {};
  private dataUrl = "assets/data.json"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<any[]>(this.dataUrl)
  }

  buildColumnChart(params: any) {
    this.seriesOptions = {
      accessibility: {
        enabled: true,
      },
      chart: {
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
        text: 'Efficiency Optimization by Branch',
      },
      xAxis: {
        max: 30,
        categories: params,
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
      series: [

        {
          name: 'Jobs Ejecutados 1',
          // data: [10, 15, 18, 20, 22, 25, 20, 0, 0, 0, 0, 0],
          type: 'column',
          data: [80, 73, 20, 30, 25, 10],
        },
        {
          name: 'Jobs Ejecutados',
          // data: [10, 15, 18, 20, 22, 25, 0, 20, 0, 0, 0, 0],
          type: 'column',
          data: [13, 25, 31, 33, 20, 30],
        },
        {
          name: 'Jobs Ejecutados',
          // data: [10, 15, 18, 20, 22, 25, 0, 0, 20, 0, 0, 0],
          type: 'column',
          data: [14, 20, 30, 18, 40, 32],
        },
        {
          name: 'Jobs Ejecutados',
          // data: [10, 15, 18, 20, 22, 25, 0, 0, 0, 20, 0, 0],
          type: 'column',
          data: [10, 20, 36, 43, 25, 15],
        },
      ],
    }

    return this.seriesOptions

  }
}
