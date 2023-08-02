import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExploreComponent } from './explore/explore.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
    SocialMediaComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
