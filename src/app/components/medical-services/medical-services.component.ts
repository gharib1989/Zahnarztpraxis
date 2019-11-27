import { Component, OnInit } from '@angular/core';
import { faBriefcaseMedical, faChild, faTooth, faFemale ,faSmile} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-medical-services',
  templateUrl: './medical-services.component.html',
  styleUrls: ['./medical-services.component.scss']
})
export class MedicalServicesComponent implements OnInit {
  faBriefcaseMedical=faBriefcaseMedical;
  faChild= faChild;
  faTooth= faTooth;
  faFemale=faFemale;
  faSmile=faSmile
  ;
  constructor() { }

  ngOnInit() {
  }

}
