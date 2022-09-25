import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const animation = '0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)';

const swingIn = {
  enter: {
    transform: 'rotateY(100deg)',
    transformOrigin: 'left'
  },
  leave: {
    transform: 'rotateY(0)',
    transformOrigin: 'left'
  },
  transition: '0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)'
}

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('sidemenu', [
      state('true', style({ width: '12vw' })),
      state('false', style({ width: '0' })),
      transition('*=>*', [ animate(animation) ]),
    ]),
    trigger('flipIn', [
      state('true', style({ transform: 'translateX(0) rotateY(0)' })),
      state('false', style({ transform: 'translateX(-150px) rotateY(90deg)' })),
      transition('*=>*', [ animate(animation) ]),
    ]),
    trigger('swingIn', [
      state('true', style(swingIn.leave)),
      state('false', style(swingIn.enter)),
      transition('*=>*', animate(swingIn.transition)),
    ])
  ]
})
export class HomeComponent implements OnInit {
  
  isBox: boolean = false;
  isFlip: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
  }
  
  animateBox() {
    const state = !this.isBox;
    if (state) {
      this.isBox = state;
      setTimeout(() => {
        this.isFlip = true;
      }, 200);
    } else {
      this.isFlip = false;
      setTimeout(() => {
        this.isBox = state;
      }, 200);
    }
  }
}