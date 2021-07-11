import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartComparisonComponent } from './chart-comparison.component';

describe('ChartComparisonComponent', () => {
  let component: ChartComparisonComponent;
  let fixture: ComponentFixture<ChartComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
