import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import HC_customEvents from 'highcharts-custom-events';

HC_stock(Highcharts);
HC_customEvents(Highcharts); interface ExtendedPoint extends Highcharts.Point {
  yCategory: string;
}

interface ExtendedXrangePointPartialFillOptionsObject
  extends Highcharts.XrangePointOptionsObject {
  partialFill?: Highcharts.XrangePointPartialFillOptionsObject;
}

@Component({
  selector: 'app-xrange-chart',
  templateUrl: './xrange-chart.component.html',
  styleUrls: ['./xrange-chart.component.css']
})
export class XrangeChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'xrange',
    },
    title: {
      text: 'Highcharts X-range',
    },

    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: '',
      },
      categories: ['Prototyping', 'Development', 'Testing', 'as', 'Testi', 'holf', 'you', 'head'],
      reversed: true,
    },
    navigator: {
      enabled: true
    },
    series: [
      {
        type: 'xrange',
        name: 'Project 1',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        data: [
          {
            x: Date.UTC(2014, 10, 21),
            x2: Date.UTC(2014, 11, 2),
            y: 0,
          },
          {
            x: Date.UTC(2014, 11, 2),
            x2: Date.UTC(2014, 11, 5),
            y: 1,
          },
          {
            x: Date.UTC(2014, 11, 8),
            x2: Date.UTC(2014, 11, 9),
            y: 2,
          },
          {
            x: Date.UTC(2014, 11, 9),
            x2: Date.UTC(2014, 11, 19),
            y: 1,
          },
          {
            x: Date.UTC(2014, 11, 10),
            x2: Date.UTC(2014, 11, 23),
            y: 2,
          },
        ],
        dataLabels: {
          enabled: true,
        },
      }, {
        type: 'xrange',
        name: 'Project 2',
        // pointPadding: 0,
        // groupPadding: 0,
        borderColor: 'gray',
        data: [
          {
            x: Date.UTC(2014, 10, 21),
            x2: Date.UTC(2014, 11, 2),
            y: 0,
          },
          {
            x: Date.UTC(2014, 11, 2),
            x2: Date.UTC(2014, 11, 5),
            y: 1,
          },
          {
            x: Date.UTC(2014, 11, 8),
            x2: Date.UTC(2014, 11, 9),
            y: 2,
          },
          {
            x: Date.UTC(2014, 11, 9),
            x2: Date.UTC(2014, 11, 19),
            y: 1,
          },
          {
            x: Date.UTC(2014, 11, 10),
            x2: Date.UTC(2014, 11, 23),
            y: 2,
          },
        ],
        dataLabels: {
          enabled: true,
        },
      },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

}
