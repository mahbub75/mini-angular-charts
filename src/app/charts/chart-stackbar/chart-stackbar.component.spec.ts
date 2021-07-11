import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStackbarComponent } from './chart-stackbar.component';

describe('ChartStackbarComponent', () => {
  let component: ChartStackbarComponent;
  let fixture: ComponentFixture<ChartStackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartStackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
