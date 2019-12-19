import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { flipInX } from 'ng-animate';

@Component({
  selector: 'app-praxis',
  templateUrl: './praxis.component.html',
  styleUrls: ['./praxis.component.scss'],
  animations: [trigger('bounce', [transition('* => *', useAnimation(flipInX))])],
})
export class PraxisComponent implements OnInit {
  public flipInX: any;
  constructor() {}

  public ngOnInit(): void {}
}
