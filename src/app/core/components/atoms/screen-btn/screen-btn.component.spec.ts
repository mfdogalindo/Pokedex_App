import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenBtnComponent } from './screen-btn.component';

describe('ScreenBtnComponent', () => {
  let component: ScreenBtnComponent;
  let fixture: ComponentFixture<ScreenBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
