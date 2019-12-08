import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageTapContentComponent } from './sub-page-tap-content.component';

describe('SubPageTapContentComponent', () => {
  let component: SubPageTapContentComponent;
  let fixture: ComponentFixture<SubPageTapContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubPageTapContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPageTapContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
