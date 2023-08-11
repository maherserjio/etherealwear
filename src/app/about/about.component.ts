import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { apiURL } from '../app.variable';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { IAboutData } from '../interfaces/about.interface';
import { Subscription } from 'rxjs';
import {
  INewsLetter,
  INewsLetterResponse,
} from '../interfaces/news-letter.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  sub1!: Subscription;
  isLoading = false;
  backgroundImageUrl!: string;
  aboutData!: IAboutData;
  newsLetterData!: INewsLetter;

  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.getAboutData();
    this.getNewsLetterData();
  }

  public getNewsLetterData(): void {
    this.sub1 = this._apiService
      .get('news-letter')
      .subscribe((response: INewsLetterResponse) => {
        this.newsLetterData = response.News_letter;
      });
  }

  public getAboutData(): void {
    this.isLoading = true;
    this._apiService.get('about').subscribe({
      next: (response: IAboutData) => {
        this.isLoading = false;
        this._utilitiesService.slideBanner();
        this.aboutData = response;
        this.backgroundImageUrl =
          apiURL + this.aboutData.banner.background_Image.url;
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }
}
