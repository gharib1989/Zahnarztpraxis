import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { MatTabGroup } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-page-tap-content',
  templateUrl: './sub-page-tap-content.component.html',
  styleUrls: ['./sub-page-tap-content.component.scss'],
})
export class SubPageTapContentComponent implements OnInit, OnDestroy {
  public faBriefcaseMedical: any = faBriefcaseMedical;
  private index: number;
  private sub: any;

  @ViewChild(MatTabGroup, { static: true }) public tabGroup: MatTabGroup;
  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.index = +params['id'];
      this.tabGroup.selectedIndex = this.index;
    });
  }
  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
