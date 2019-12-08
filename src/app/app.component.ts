import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('stickyMenu', { static: false }) public menuElement: ElementRef;
  public title: string = 'zhanArztPraxix';
  public sticky: boolean = false;
  public isVisible: boolean = true;
  public menuPosition: any;
  constructor(private router: Router) {}
  public ngAfterViewInit(): void {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }
  public isLinkActive(url: string): boolean {
    return window.location.href.toLowerCase().includes(url.toLowerCase());
  }
  public hideList(event: Event): void {
    this.isVisible = false;
    setTimeout(() => {
      this.isVisible = true;
    }, 500);
  }
  @HostListener('window:scroll', ['$event'])
  public handleScroll(): void {
    const windowScroll = window.pageYOffset;
    console.log(windowScroll);
    if (windowScroll > this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  public ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
