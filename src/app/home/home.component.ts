import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IHome } from '../interfaces/home.interface';
import { apiURL } from '../app.variable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeData!: IHome;
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.stopAnimation();
    this.startAnimation();
    this._apiService.get('home').subscribe((response: IHome) => {
      this.stopAnimation();
      this.slideBanner();
      this.homeData = response;
      this.homeData.banner.background_Image.url =
        apiURL + this.homeData.banner.background_Image.url;
    });
  }

  public startAnimation() {
    $('#preloader').animate(
      {
        visiblity: 'visible',
      },
      1000
    );
    $('#preloader').animate(
      {
        opacity: '1',
      },
      20000
    );
  }

  public stopAnimation() {
    $('#preloader').animate(
      {
        visiblity: 'hidden',
      },
      1000
    );
  }

  public slideBanner(): void {
    setTimeout(() => {
      $('#top').hide();
      $(window).scrollTop(0);
      setTimeout(() => {
        $('#top').slideDown('slow');
      }, 500);
    }, 1);
  }
}
