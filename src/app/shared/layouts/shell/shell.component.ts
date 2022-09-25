import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit {

  private _routeData: any; set routeData(value: any) {this._routeData = value;} get routeData() {return this._routeData;}
  
  constructor(private router: Router, private elem: ElementRef, private rndr: Renderer2) {
    this.router.events.subscribe((e) => {
			if (e instanceof ActivationEnd) {
        this.routeData = e?.snapshot?.data;
			}
		});
  }

  ngOnInit(): void {
  }
  
}
