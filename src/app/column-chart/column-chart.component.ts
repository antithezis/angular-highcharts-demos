import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import draggable from 'highcharts/modules/draggable-points';
import { Welcome } from '../intefaces/columnChartData';
import { ChartsService } from '../services/charts.service';
//import HighchartsReact from 'highcharts-react-official';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  dataChart: Welcome[]
  categoires: any[]

  viewChart: boolean

  Highcharts: typeof Highcharts = Highcharts;
  columnchart: Highcharts.Options = {};

  constructor(private chartService: ChartsService) {
    if (typeof Highcharts === 'object') {
      draggable(Highcharts);
    }
  }

  ngOnInit(): void {
    this.getData()
    this.viewChart = false
  }

  getData() {
    this.chartService.getData().subscribe({
      next: data => {
        this.dataChart = data.map((x: any) => ({
          categories: x.machineName,
          procentajes: Object.values(x.data.reduce((accumulator: any, currentValue: any) => {
            const robotName = currentValue.robotName;
            if (!accumulator[robotName]) {
              accumulator[robotName] = {
                name: robotName,
                type: 'column',
                data: []
              };
            }
            accumulator[robotName].data.push(currentValue.percentage);
            return accumulator;
          }, {}))
        }));

        this.categoires = this.dataChart.map((x: any) => x.categories)

        const melapela = this.dataChart.reduce((acc, val) => acc.concat(val), []);

        this.buildData(melapela)
      }
    })
  }

  buildData(melapela: any) {
    let test = melapela.map((x: any) => x.procentajes)
    let porcentajes = test.reduce((acc, val) => acc.concat(val), [])
    this.showChart(this.categoires, porcentajes)
  }

  showChart(categories: any, procentajes: any): void {
    this.columnchart = this.chartService.buildColumnChart(categories, procentajes)
    this.viewChart = true
  }

}

