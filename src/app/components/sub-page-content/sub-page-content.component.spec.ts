import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageContentComponent } from './sub-page-content.component';

describe('SubPageContentComponent', () => {
  let component: SubPageContentComponent;
  let fixture: ComponentFixture<SubPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
