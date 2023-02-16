import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import draggable from 'highcharts/modules/draggable-points';
import { ChartsService } from '../services/charts.service';
//import HighchartsReact from 'highcharts-react-official';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  categoires: any = [
    "Missed_robot_112680",
    "AUTOMATVM019",
    "Missed_robot_113523",
    "Missed_robot_113521",
    "Missed_robot_113522",
    "Missed_robot_113525",
    "Missed_robot_113524",
    "AUTOMATVM001",
    "Missed_robot_113526",
    "Missed_robot_113527",
    "AUTOMATVM007",
    "Missed_robot_113528",
    "Missed_robot_113529",
    "AUTOMATVM022",
    "Missed_robot_113530",
    "AUTOMATVM023",
    "AUTOMATVM024",
    "Missed_robot_113531",
    "Automatvm008",
    "Missed_robot_113534",
    "Missed_robot_113533",
    "AutomatVM027",
    "Missed_robot_113532",
    "AutomatVM026",
    "AutomatVM028",
    "AutomatVM029",
    "AutomatVM030",
    "automatvm012",
    "automatvm014",
    "automatvm015",
    "automatvm016",
    "automatvm017",
    "AutomatVM039",
    "VACU2VM021",
    "VACU2VM022",
    "Missed_robot_126694",
    "VACU2VM023",
    "VACU2VM024",
    "AUTOMATVM002",
    "VACU2VM025",
    "AUTOMATVM031",
    "VACU2VM026",
    "VACU2VM027",
    "VACU2VM028",
    "Missed_robot_128584",
    "VACU2VM029",
    "AUTOMATVM010",
    "VACU2VM030",
    "AutomatVM025",
    "VACU2VM031",
    "AUTOMATVM009",
    "VACU2VM032",
    "VACU2VM033",
    "VACU2VM034",
    "VACU2VM035",
    "VACU2VM036",
    "VACU2VM037",
    "VACU2VM038",
    "VACU2VM039",
    "VACU2VM041",
    "VACU2VM042",
    "VACU2VM043",
    "AUTOMATVM003",
    "VACU2VM044",
    "AUTOMATVM043",
    "VACU2VM045",
    "AUTOMATVM021",
    "AUTOMATVM041",
    "AUTOMATVM042",
    "AUTOMATVM040",
    "SIVIGILAVM008",
    "SRRPAUIPP01",
    "Automatvm072",
    "VACU2VM047",
    "VACU2VM046",
    "LABVM004",
    "Automatvm044",
    "automatvm006",
    "Automatvm046",
    "LabVM002",
    "COEAUTOMATVM10",
    "LabVM003",
    "LABVM001",
    "LabVM005",
    "LabVM006",
    "PIPSBHF5MQ2",
    "Missed_robot_0",
    "Missed_robot_31165",
    "Missed_robot_36686",
    "Missed_robot_39879",
    "coeautomatVM9",
    "Missed_robot_111322",
    "Missed_robot_111323",
    "Missed_robot_111324",
    "coeautomatvm19",
    "Missed_robot_111325",
    "Missed_robot_111326"
  ]

  porcentajes: any

  Highcharts: typeof Highcharts = Highcharts;
  columnchart: Highcharts.Options = {};

  constructor(private chartService: ChartsService) {
    if (typeof Highcharts === 'object') {

      draggable(Highcharts);
    }
  }

  ngOnInit(): void {
    this.showChart()
    this.getData()
  }

  getData() {
    this.chartService.getData().subscribe({
      next: data => {
        this.categoires = data.map((x: any) => x.machineName)
        this.porcentajes = data.map((x: any) => {
        })
        console.log(data)
      }
    })
  }

  showChart(): void {
    this.columnchart = this.chartService.buildColumnChart(this.categoires)

  }

}

