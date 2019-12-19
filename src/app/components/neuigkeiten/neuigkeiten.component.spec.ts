import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuigkeitenComponent } from './neuigkeiten.component';

describe('NeuigkeitenComponent', () => {
  let component: NeuigkeitenComponent;
  let fixture: ComponentFixture<NeuigkeitenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuigkeitenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuigkeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
