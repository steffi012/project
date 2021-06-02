import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybComponent } from './twowayb.component';

describe('TwowaybComponent', () => {
  let component: TwowaybComponent;
  let fixture: ComponentFixture<TwowaybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
