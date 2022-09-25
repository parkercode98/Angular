import { trigger, state, style, animate, transition } from '@angular/animations';

export interface CoolAnimation {
  in: {};
  out: {};
  transition: string;
}


const sidemenu: CoolAnimation = {
  in: {
    width: '14vw',
  },
  out: {
    width: '0',
  },
  transition: '0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)',
}

const swingInLeft: CoolAnimation = {
  in: {
    transform: 'rotateY(0)',
    transformOrigin: 'left'
  },
  out: {
    transform: 'rotateY(100deg)',
    transformOrigin: 'left'
  },
  transition: '0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275)'
}

const slideInRight: CoolAnimation = {
  in: {
    transform: 'translateX(0)',
  },
  out: {
    transform: 'translateX(100%)',
  },
  transition: '0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)'
}


export const CoolAnimations = [
  trigger('sidemenu', [
    state('true', style(sidemenu.in)),
    state('false', style(sidemenu.out)),
    state('void', style(sidemenu.out)),
    transition('*=>*', [ animate(sidemenu.transition) ]),
  ]),
  trigger('swingInLeft', [
    state('true', style(swingInLeft.in)),
    state('void', style(swingInLeft.out)),
    state('false', style(swingInLeft.out)),
    transition('*=>*', [ animate(swingInLeft.transition) ]),
  ]),
  trigger('slideInRight', [
    state('true', style(slideInRight.in)),
    state('void', style(slideInRight.out)),
    state('false', style(slideInRight.out)),
    transition('*=>*', [ animate(slideInRight.transition) ]),
  ]),
  
]