import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileLineComponent } from './tile-line.component';

describe('LineChartComponent', () => {
  let component: TileLineComponent;
  let fixture: ComponentFixture<TileLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
