import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrangeChartComponent } from './xrange-chart.component';

describe('XrangeChartComponent', () => {
  let component: XrangeChartComponent;
  let fixture: ComponentFixture<XrangeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XrangeChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XrangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
