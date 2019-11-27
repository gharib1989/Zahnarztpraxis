import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiklinksComponent } from './quiklinks.component';

describe('QuiklinksComponent', () => {
  let component: QuiklinksComponent;
  let fixture: ComponentFixture<QuiklinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiklinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiklinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
