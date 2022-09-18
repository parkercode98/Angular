import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Material */
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';





/* Components */
import { FiltersComponent } from './components/filters/filters.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageComponent } from './components/page/page.component';
import { ShellComponent } from './layouts/shell/shell.component';
import { SpacerComponent } from './components/spacer/spacer.component';

const modules = [
  CommonModule,
  MatIconModule,
  MatTreeModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatButtonToggleModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatBottomSheetModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatTooltipModule,
  MatTabsModule,
  MatTableModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatExpansionModule,
  RouterModule,
  MatSlideToggleModule
];

const components = [
  ShellComponent, 
  NavbarComponent, 
  PageComponent,
  FiltersComponent,
  SpacerComponent
];


@NgModule({
	declarations: [...components],
	imports: [...modules],
	exports: [...components, ...modules,],
})
export class SharedModule {}
