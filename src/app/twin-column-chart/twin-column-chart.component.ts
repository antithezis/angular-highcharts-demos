
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartsService } from '../services/charts.service';
//import HighchartsReact from 'highcharts-react-official';


@Component({
  selector: 'app-twin-column-chart',
  templateUrl: './twin-column-chart.component.html',
  styleUrls: ['./twin-column-chart.component.css']
})
export class TwinColumnChartComponent implements OnInit {

  dataChart: any[]
  categoires: any[]

  viewChart: boolean

  Highcharts: typeof Highcharts = Highcharts;
  columnchart: Highcharts.Options = {};

  constructor(private chartService: ChartsService) {
    if (typeof Highcharts === 'object') {
      // draggable(Highcharts);
    }
  }

  ngOnInit(): void {
    this.getData()
    this.viewChart = false
  }

  getData() {
    this.chartService.getData().subscribe({
      next: data => {
      }
    })
  }

  buildData(melapela: any) {
    let test = melapela.map((x: any) => x.procentajes)
    let porcentajes = test.reduce((acc, val) => acc.concat(val), [])
    this.showChart(this.categoires, porcentajes)
  }

  showChart(categories: any, procentajes: any): void {
    this.columnchart = this.chartService.buildTwinChart(categories, procentajes)
    this.viewChart = true
  }

}
