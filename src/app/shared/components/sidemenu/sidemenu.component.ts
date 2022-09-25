import { NavRoutes } from '@core/constants/routes';
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { CoolAnimations } from './../../../core/constants/animations';
import { SidemenuService } from '@core/services/comp-services/sidemenu/sidemenu.service';


const animations = CoolAnimations;

@Component({
  selector: 'sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  animations: animations
})
export class SidemenuComponent implements OnInit {
  isSideMenu: boolean;
  
  @HostBinding('class') class = 'sidemenu';
  
  @HostBinding('@sidemenu') sidemenuAnim: boolean = false;
  wrapperAnim: boolean = false;
  
  navRoutes = NavRoutes;
  
  constructor(private elem: ElementRef, private rndr: Renderer2, public sidemenuService: SidemenuService) {
    this.sidemenuService.sidebarVisibilityChange.subscribe(value => {
      this.isSideMenu = value;
      this.resolveAnimations(value);
    });
  }

  
  
  resolveAnimations(value: boolean) {
    if (value) {
      this.sidemenuAnim = true;
      setTimeout(()=>{this.wrapperAnim = true}, 100)
    } else {
      this.wrapperAnim = false;
      setTimeout(()=>{this.sidemenuAnim = false;}, 1)
    }
  }
  
  ngOnInit(): void {
  }
  
}


