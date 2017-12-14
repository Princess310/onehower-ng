import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentComponent } from './moment.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: MomentComponent }
    ]),
  ],
  declarations: [
    MomentComponent,
  ],
  exports: [
    MomentComponent,
  ],
})
export class MomentModule { }
