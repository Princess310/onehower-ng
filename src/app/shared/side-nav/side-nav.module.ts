import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SideNavComponent } from './side-nav.component';
import { MaterialModule } from '../material/material.module';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    SideNavComponent,
    AvatarComponent,
  ],
  exports: [
    SideNavComponent,
  ],
})
export class SideNavModule { }
