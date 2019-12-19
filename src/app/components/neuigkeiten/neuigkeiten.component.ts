import { Component, OnInit } from '@angular/core';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-neuigkeiten',
  templateUrl: './neuigkeiten.component.html',
  styleUrls: ['./neuigkeiten.component.scss'],
})
export class NeuigkeitenComponent implements OnInit {
  public faBriefcaseMedical: any = faBriefcaseMedical;
  constructor() {}

  ngOnInit() {}
}
