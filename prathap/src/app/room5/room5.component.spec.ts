import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Room5Component } from './room5.component';

describe('Room5Component', () => {
  let component: Room5Component;
  let fixture: ComponentFixture<Room5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Room5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Room5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
