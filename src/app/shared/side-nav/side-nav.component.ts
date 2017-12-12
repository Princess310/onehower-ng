import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'gmail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/gmail.svg'));
    iconRegistry.addSvgIcon(
      'wechat',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/wechat.svg'));
    iconRegistry.addSvgIcon(
      'blog',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/blog.svg'));
  }

  ngOnInit() {
  }

  changeSiderNav() {
    this.onChangeSideNav.emit();
  }

}
