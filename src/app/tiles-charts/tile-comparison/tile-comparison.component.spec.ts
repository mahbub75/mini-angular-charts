import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComparisonComponent } from './tile-comparison.component';

describe('TileComparisonComponent', () => {
  let component: TileComparisonComponent;
  let fixture: ComponentFixture<TileComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileComparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
