import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {
  
  isSidebarVisible: boolean;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  
  constructor() {
    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value
  });
  }
  
  toggle() {
    this.sidebarVisibilityChange.next(!this.isSidebarVisible);
  }
}
