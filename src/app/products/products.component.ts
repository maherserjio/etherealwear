import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { apiURL } from '../app.variable';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  sub1!: Subscription;
  isLoading = false;
  backgroundImageUrl!: string;
  productsData!: any;

  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.hideBanner();
    this._utilitiesService.initializeCarouselConfig();
    this.getProductsData();
  }

  public getProductsData(): void {
    this.isLoading = true;
    this._apiService.get('products').subscribe({
      next: (response: any) => {
        this.isLoading = false;
        this._utilitiesService.slideBanner();
        this.productsData = response;
        this.backgroundImageUrl =
          apiURL + this.productsData.banner.background_Image.url;
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }

  public hideBanner(): void {
    setTimeout(() => {
      $('.page-heading').hide();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
  }
}
