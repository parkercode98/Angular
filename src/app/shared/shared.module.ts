import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PageComponent } from './components/page/page.component';
import { ShellComponent } from './layouts/shell/shell.component';




const modules = [
  CommonModule,
];

const components = [
  ShellComponent, 
  NavbarComponent, 
  PageComponent
];


@NgModule({
	declarations: [...components],
	imports: [...modules],
	exports: [...components, ...modules,],
})
export class SharedModule {}
