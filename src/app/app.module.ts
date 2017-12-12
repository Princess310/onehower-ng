import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './routes';

import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { MomentComponent } from './pages/moment/moment.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WidgetsComponent } from './pages/widgets/widgets.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MomentComponent,
    NavbarComponent,
    WidgetsComponent,
    FooterComponent,
    SideNavComponent,
    AvatarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
