import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { NewsLetterComponent } from '../home/news-letter/news-letter.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CarouselComponent, NewsLetterComponent],
  imports: [CommonModule, RouterModule],
  exports: [CarouselComponent, NewsLetterComponent],
})
export class SharedModule {}
