import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NavRoutes } from '@core/constants/routes';
import { SidemenuService } from '@core/services/comp-services/sidemenu/sidemenu.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  _title: string;
  height: string;
  
  @Input()
  set title(value: string) {
    this._title = value;
  }
  get title() {
    return this._title;
  }
  
  @HostBinding('class') class = 'navbar';
  
  navRoutes = NavRoutes;

  constructor(private elem: ElementRef, private rndr: Renderer2, private sidemenuService: SidemenuService) {}

  ngOnInit(): void {
    this.height = this.elem.nativeElement.clientHeight.toString();
  }
  
  changeTheme($event: MatSlideToggleChange) {
    console.log($event.checked)
    if ($event.checked) {
      this.rndr.addClass(document.body, 'theme-alternate');
    } else {
      this.rndr.removeClass(document.body, 'theme-alternate');
    }
  }
  
  toggleSideMenu() {
    this.sidemenuService.toggle();
  }
  
}
