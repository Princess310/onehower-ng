import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  github: String = 'https://github.com/Princess310';
  @Output() onChangeSideNav = new EventEmitter<boolean>();

  constructor() {
  }

  changeSiderNav() {
    this.onChangeSideNav.emit();
  }
}
