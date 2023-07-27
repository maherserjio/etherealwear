import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { AboutSkillsComponent } from './about-skills/about-skills.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AboutComponent,
    MainBannerComponent,
    AboutSkillsComponent,
    OurTeamComponent,
    OurServicesComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
