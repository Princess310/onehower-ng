import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetsComponent } from './widgets.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: WidgetsComponent }
    ]),
  ],
  declarations: [
    WidgetsComponent,
  ],
  exports: [
    WidgetsComponent,
  ],
})
export class WidgetsModule { }
