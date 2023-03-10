import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HighchartsChartModule } from "highcharts-angular";
import { AppComponent } from "./app.component";
import { LineChartComponent } from "./line-chart/line-chart.component";
import { StockChartComponent } from "./stock-chart/stock-chart.component";
import { MapChartComponent } from "./map-chart/map-chart.component";
import { GanttChartComponent } from "./gantt-chart/gantt-chart.component";
import { LazyLoadingChartComponent } from './lazy-loading-chart/lazy-loading-chart.component';
import { LineTestComponent } from './tests/line-test/line-test.component';
import { XrangeChartComponent } from './xrange-chart/xrange-chart.component';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { TwinColumnChartComponent } from './twin-column-chart/twin-column-chart.component';
@NgModule({
  declarations: [AppComponent, LineChartComponent, StockChartComponent, MapChartComponent, GanttChartComponent, LazyLoadingChartComponent, LineTestComponent, XrangeChartComponent, ColumnChartComponent, TwinColumnChartComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HighchartsChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
