import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ExploreComponent } from './explore/explore.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    MainBannerComponent,
    ExploreComponent,
    SocialMediaComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
