import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NewsLetterComponent } from '../home/news-letter/news-letter.component';
import { RouterModule } from '@angular/router';
import { MainBannerComponent } from '../components/main-banner/main-banner.component';

@NgModule({
  declarations: [CarouselComponent, NewsLetterComponent, MainBannerComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarouselComponent, NewsLetterComponent, MainBannerComponent],
})
export class SharedModule {}
