import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  public lat : number = 51.678418;
  public lng : number = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
