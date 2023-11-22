import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NewsLetterComponent } from '../home/news-letter/news-letter.component';
import { RouterModule } from '@angular/router';
import { MainBannerComponent } from '../components/main-banner/main-banner.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { MarkedPipe } from './pipes/marked.pipe';
import { MaintenanceComponent } from '../components/maintenance/maintenance.component';

@NgModule({
  declarations: [
    CarouselComponent,
    NewsLetterComponent,
    MainBannerComponent,
    LoaderComponent,
    MaintenanceComponent,
    MarkedPipe,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CarouselComponent,
    NewsLetterComponent,
    MainBannerComponent,
    LoaderComponent,
    MaintenanceComponent,
    MarkedPipe,
  ],
})
export class SharedModule {}
