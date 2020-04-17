import { Component } from '@angular/core';
import { pageTransition } from './shared/animations/router.animations';
import { HelperService } from './shared/services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [pageTransition().fadeInAndOut()],
  host: {'[@pageTransition]': ''}
})
export class AppComponent {

  constructor(private helperService: HelperService) {
    this.helperService.isWebpSupported = (<any>window).supportsWebp;
  }
}
