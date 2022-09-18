import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
		data: { page: 'Home' },
    title: 'Coding | DevTools',
	},
	{
		path: 'bookmarks',
		loadChildren: () => import('./modules/bookmarks/bookmarks.module').then((m) => m.BookmarksModule),
    data: { page: 'Bookmarks'}
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
