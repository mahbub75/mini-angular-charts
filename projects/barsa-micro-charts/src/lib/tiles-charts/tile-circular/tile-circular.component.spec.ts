import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCircularComponent } from './tile-circular.component';

describe('CircularChartComponent', () => {
  let component: TileCircularComponent;
  let fixture: ComponentFixture<TileCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileCircularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
