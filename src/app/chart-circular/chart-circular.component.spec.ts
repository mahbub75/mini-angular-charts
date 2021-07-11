import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCircularComponent } from './chart-circular.component';

describe('ChartCrcularComponent', () => {
  let component: ChartCircularComponent;
  let fixture: ComponentFixture<ChartCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
