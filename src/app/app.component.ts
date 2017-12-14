import { Component, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
    zone: NgZone,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));

    // we register all the svg icons needed here.
    iconRegistry.addSvgIcon(
      'gmail',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/gmail.svg'));
    iconRegistry.addSvgIcon(
      'wechat',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/wechat.svg'));
    iconRegistry.addSvgIcon(
      'blog',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/blog.svg'));
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo/github.svg'));
  }
  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
