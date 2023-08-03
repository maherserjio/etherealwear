import { Component, OnInit } from '@angular/core';
import { IHome } from '../interfaces/home.interface';
import { apiURL } from '../app.variable';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  backgroundImageUrl!: string;
  homeData!: IHome;
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this._utilitiesService.initializeCarouselConfig();
    this.getHomeData();
  }

  public getHomeData(): void {
    this.isLoading = true;
    this._apiService.get('home').subscribe((response: IHome) => {
      this.isLoading = false;
      this._utilitiesService.slideBanner();
      this.homeData = response;
      this.backgroundImageUrl =
        apiURL + this.homeData.banner.background_Image.url;
    });
  }
}
