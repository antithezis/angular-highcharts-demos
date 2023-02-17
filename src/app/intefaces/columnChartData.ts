export interface ColumnChart {
  machineId: number;
  machineName: string;
  data: Datum[];
}

export interface Datum {
  startDate: number;
  endDate: number;
  status: string;
  robotName: string;
  percentage: number;
}

export interface Welcome {
    categories:  string;
    procentajes: number[];
}
