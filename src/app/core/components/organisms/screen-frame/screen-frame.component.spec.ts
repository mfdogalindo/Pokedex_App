import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFrameComponent } from './screen-frame.component';

describe('ListFrameComponent', () => {
  let component: ListFrameComponent;
  let fixture: ComponentFixture<ListFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
