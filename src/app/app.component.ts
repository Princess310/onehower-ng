import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList = [{
    name: '首页',
    path: '/',
  }, {
    name: '日常动态',
    path: '/daily',
  }, {
    name: 'widgets',
    path: '/',
  }];
  constent = 'Just to build web site by angular';
}
