import { Component, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-quiklinks',
  templateUrl: './quiklinks.component.html',
  styleUrls: ['./quiklinks.component.scss']
})
export class QuiklinksComponent implements OnInit {
  faCaretRight = faCaretRight
  ;
  constructor() { }

  ngOnInit() {
  }

}
