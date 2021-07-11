import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileStackbarComponent } from './tile-stackbar.component';

describe('StackBarComponent', () => {
  let component: TileStackbarComponent;
  let fixture: ComponentFixture<TileStackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileStackbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileStackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
