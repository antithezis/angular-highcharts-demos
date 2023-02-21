export interface ColumnChart {
  simulationId: number;
  actualData: ActualDatum[];
}

export interface ActualDatum {
  machineId: number;
  machineName: string;
  data: Datum[];
  min: number;
  max: number;
}

export interface Datum {
  robotId: number;
  robotName: string;
  percentage: number;
}
