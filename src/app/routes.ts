import { Routes } from '@angular/router';
import { MomentComponent } from './pages/moment/moment.component';
import { IndexComponent } from './pages/index/index.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';

export const ROUTES: Routes = [
  { path: '', component: IndexComponent },
  { path: 'daily', component: MomentComponent },
  { path: 'widgets', component: WidgetsComponent },
];