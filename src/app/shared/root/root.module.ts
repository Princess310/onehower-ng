import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterModule } from '../footer/footer.module';
import { NavbarModule } from '../navbar/navbar.module';
import { SideNavModule } from '../side-nav/side-nav.module';
import { UserCardModule } from '../user-card/user-card.module';
import { UserInfoModule } from '../user-info/user-info.module';

import { RootComponent } from './root.component';

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    NavbarModule,
    SideNavModule,
    UserCardModule,
    UserInfoModule,
  ],
  declarations: [
    RootComponent,
  ],
  exports: [
    CommonModule,
    FooterModule,
    NavbarModule,
    SideNavModule,
    UserCardModule,
    UserInfoModule,
    RootComponent,
  ],
})
export class RootModule { }
