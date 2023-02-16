import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwinColumnChartComponent } from './twin-column-chart.component';

describe('TwinColumnChartComponent', () => {
  let component: TwinColumnChartComponent;
  let fixture: ComponentFixture<TwinColumnChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwinColumnChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwinColumnChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
