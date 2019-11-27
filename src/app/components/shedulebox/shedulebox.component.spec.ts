import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleboxComponent } from './shedulebox.component';

describe('SheduleboxComponent', () => {
  let component: SheduleboxComponent;
  let fixture: ComponentFixture<SheduleboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
