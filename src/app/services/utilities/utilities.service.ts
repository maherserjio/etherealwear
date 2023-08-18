import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  public slideBanner(): void {
    setTimeout(() => {
      $('#top').hide();
      $(window).scrollTop(0);
      setTimeout(() => {
        $('#top').slideDown('slow');
      }, 500);
    }, 500);
  }

  public initializeCarouselConfig(): void {
    setTimeout(() => {
      // @ts-ignore
      $('.owl-women-item').owlCarousel({
        items: 5,
        loop: true,
        dots: true,
        nav: true,
        margin: 30,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    }, 500);
  }
}
