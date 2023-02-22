import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import draggable from 'highcharts/modules/draggable-points';
import { ChartsService } from '../services/charts.service';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  dataChart: any

  categories: any[]
  seires: any[]

  viewChart: boolean

  Highcharts: typeof Highcharts = Highcharts;
  columnchart: Highcharts.Options = {};

  constructor(private chartService: ChartsService) {
    if (typeof Highcharts === 'object') {
      draggable(Highcharts);
    }
  }

  ngOnInit(): void {
    this.nuevoIntento()
    this.viewChart = false
  }


  nuevoIntento() {
    this.chartService.getData().subscribe({
      next: data => {
        this.categories = data.actualData.map((machine: any) => machine.machineName)

        let originalData = data.actualData

        const numMachines = originalData.length;
        // const numRobots = originalData[0].data.length;

        const maxRobots = Math.max(...originalData.map((machine) => machine.data.length));

        const percentageMatrix = Array(maxRobots)
          .fill(null)
          .map(() => Array(numMachines).fill(null));


        // originalData.forEach((machine, machineIndex) => {
        //   machine.data.forEach((robot, robotIndex) => {
        //     percentageMatrix[robotIndex][machineIndex] = robot.percentage;
        //   });
        // });


        // const percentageData = percentageMatrix.map((robotPercentages, index) => {
        //   const data = robotPercentages.map((percentage, robotIndex) => ({
        //     y: percentage ?? 0,
        //   }));
        //   return { type: 'column', data };
        // });


        originalData.forEach((machine, machineIndex) => {
          machine.data.forEach((robot, robotIndex) => {
            percentageMatrix[robotIndex][machineIndex] = {
              percentage: robot.percentage,
              name: robot.robotName
            };
          });
        });


        const percentageData = percentageMatrix.map((robotData) => {
          const data = robotData.map((robot) => {
            return {
              y: robot?.percentage ?? 0,
              robotName: robot?.name ?? ""
            };
          });
          return { type: 'column', data };
        });

        console.log(percentageData)

        this.showChart(this.categories, percentageData)
      }
    })
  }

  getData() {
    this.chartService.getData().subscribe({
      next: data => {
        this.dataChart = data.actualData
        this.categories = data.actualData.map((machine: any) => machine.machineName)
        this.seires = data.actualData.map((machine: any) => {
          return machine.data.map((robot: any) => {
            return {
              type: 'column',
              name: robot.robotName,
              data: [robot.percentage]
            }
          })
        }).flat()

        let robotLength = 0

        for (let i = 0; i < data.actualData.length; i++) {
          robotLength += data.actualData[i].data.length
        }

        this.buildData(robotLength)
        this.showChart(this.categories, this.seires)
      }
    })
  }

  buildData(robotLength: number) {
    let arregloRobots: any = new Array(robotLength)
    let arregloMachines: any = new Array(this.categories.length)


    for (let i = 0; i < arregloRobots.length; i++) {
      arregloRobots[i] = arregloMachines
    }


    debugger;
    for (let i = 0; i < this.dataChart.length; i++) {
      let machine = this.dataChart[i]
      for (let j = 0; j < machine.data.length; j++) {
        // llenado de datos
        for (let k = 0; k < arregloRobots.length; k++) {
          if (arregloRobots[k][j] == null) {
            arregloRobots[k][j] = machine.data[j].percentage
            break
          }
        }

      }
    }


    console.log(arregloRobots)
  }

  showChart(categories: any, procentajes: any): void {
    const dataTest = [
      {
        type: 'column',
        data: [
          { y: 29.9, robotName: "pee", },
          { y: 30.9, robotName: "Cerbero", },
        ]
      }, {
        type: 'column',
        data: [
          { y: 29.9, robotName: "poo", },
          { y: 40.9, robotName: "canserbero", },
        ]
      }
    ]
    this.columnchart = this.chartService.buildColumnChart(categories, procentajes)
    this.viewChart = true
  }

}

