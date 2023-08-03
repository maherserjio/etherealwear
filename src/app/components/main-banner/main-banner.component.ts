import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss'],
})
export class MainBannerComponent implements OnInit {
  @Input() title!: string;
  @Input() isHomeBanner = false;
  @Input() backgroundImageUrl!: string;

  constructor() {}
  ngOnInit(): void {
    console.log(this.backgroundImageUrl);
  }
}
