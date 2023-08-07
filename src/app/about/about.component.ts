import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { apiURL } from '../app.variable';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { IAboutData } from '../interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  isLoading = false;
  backgroundImageUrl!: string;
  aboutData!: IAboutData;
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.getAboutData();
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
