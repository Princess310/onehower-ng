import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  {
    path        : 'index',
    loadChildren: './pages/index/index.module#IndexModule'
  },
  {
    path        : 'daily',
    loadChildren: './pages/moment/moment.module#MomentModule'
  },
  {
    path        : 'widgets',
    loadChildren: './pages/widgets/widgets.module#WidgetsModule'
  }
];