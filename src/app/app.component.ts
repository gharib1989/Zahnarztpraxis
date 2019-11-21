import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  OnInit , AfterViewInit {
  @ViewChild( 'stickyMenu', {static: false}) public menuElement: ElementRef;
  public title: string = 'zhanArztPraxix';
  public sticky: boolean = false;
  public menuPosition: any;
  constructor() { }
  public ngAfterViewInit() : void  {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
}
@HostListener('window:scroll', ['$event'])
public handleScroll() : void {
        const windowScroll = window.pageYOffset;
       console.log(windowScroll);
        if ( windowScroll >= this.menuPosition) {
           this.sticky = true;
       } else {
           this.sticky = false;
       }
    }
    public ngOnInit(): void {
    }
}
