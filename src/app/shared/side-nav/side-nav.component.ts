import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() onChangeSideNav = new EventEmitter<boolean>();

  menuList = [{
    name: '首页',
    path: '/',
    icon: 'home',
  }, {
    name: '日常动态',
    path: '/daily',
    icon: 'schedule',
  }, {
    name: '实验室',
    path: '/widgets',
    icon: 'widgets',
  }];

  links = [{
    name: 'WeChat',
    link: '/',
    icon: 'wechat',
  }, {
    name: 'wanghaojz@gmail.com',
    link: '/daily',
    icon: 'gmail',
  }, {
    name: 'Github',
    link: '/widgets',
    icon: 'github',
  }, {
    name: 'Blog - OneHower',
    link: '/widgets',
    icon: 'blog',
  }];

  constructor() { }

  ngOnInit() {
  }

  changeSiderNav() {
    this.onChangeSideNav.emit();
  }

}
