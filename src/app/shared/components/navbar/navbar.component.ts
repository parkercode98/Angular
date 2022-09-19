import { NavRoutes } from '@core/constants/routes';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','./_navbar-theme.scss']
})
export class NavbarComponent implements OnInit {
  _title: string;
  navRoutes = NavRoutes;
  modelName: string;
  height: string;
  
  @Input()
  set title(value: string) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
  
  

  constructor(private elem: ElementRef, private rndr: Renderer2) {
    this.rndr.addClass(this.elem.nativeElement, 'navbar');
  }

  ngOnInit(): void {
    this.height = this.elem.nativeElement.clientHeight.toString();
  }
  
  changeTheme(elemRef: any) {
    const elem = elemRef as HTMLElement;
    const child = elem.firstChild as HTMLElement;
    const isDark = child.classList.contains('mat-checked');
    if (!isDark) {
      this.rndr.removeClass(elem, 'dark-theme');
      this.rndr.addClass(elem, 'light-theme');
      this.rndr.addClass(document.body, 'theme-alternate');
    } else {
      this.rndr.removeClass(elem, 'light-theme')
      this.rndr.addClass(elem, 'dark-theme');
      this.rndr.removeClass(document.body, 'theme-alternate');
    }
    console.log(elem, child, isDark)
  }
  
}
