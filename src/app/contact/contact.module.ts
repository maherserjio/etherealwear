import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [ContactComponent, MainBannerComponent, ContactFormComponent],
  imports: [CommonModule, ContactRoutingModule],
})
export class ContactModule {}
