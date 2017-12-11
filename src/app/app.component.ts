import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuList = ['首页', '日常动态', '实验室'];
  constent = 'Just to build web site by angular';
}
