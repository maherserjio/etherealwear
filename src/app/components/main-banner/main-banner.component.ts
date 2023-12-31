import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent {
  @Input() title!: string;
  @Input() isHomeBanner = false;
  @Input() backgroundImageUrl!: string;
}
