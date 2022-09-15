import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  private _routeData: any;
  set routeData(value: any) {
    this._routeData = value;
  }
  get routeData() {
    return this._routeData;
  }
  
  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
			if (e instanceof ActivationEnd) {
        this.routeData = e?.snapshot?.data;
			}
		});
  }

  ngOnInit(): void {
  }

}
