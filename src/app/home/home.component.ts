import { Component, OnDestroy, OnInit } from '@angular/core';
import { IHome } from '../interfaces/home.interface';
import { apiURL } from '../app.variable';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { ApiService } from '../services/api/api.service';
import {
  INewsLetter,
  INewsLetterResponse,
} from '../interfaces/news-letter.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub1!: Subscription;
  sub2!: Subscription;
  isLoading = false;
  backgroundImageUrl!: string;
  homeData!: IHome;
  newsLetterData!: INewsLetter;
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.getHomeData();
    this.getNewsLetterData();
  }

  public getNewsLetterData(): void {
    this.sub1 = this._apiService
      .get('news-letter')
      .subscribe((response: INewsLetterResponse) => {
        this.newsLetterData = response.News_letter;
      });
  }

  public getHomeData(): void {
    this.isLoading = true;
    this.sub2 = this._apiService.get('home').subscribe({
      next: (response: IHome) => {
        this.isLoading = false;
        this._utilitiesService.slideBanner();
        this._utilitiesService.initializeCarouselConfig();
        this.homeData = response;
        this.backgroundImageUrl =
          apiURL + this.homeData.banner.background_Image.url;
      },
    });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }
}
