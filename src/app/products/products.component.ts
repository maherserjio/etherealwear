import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { apiURL } from '../app.variable';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  isLoading = false;
  backgroundImageUrl!: string;
  productsData!: any;

  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this._utilitiesService.initializeCarouselConfig();
    this.getProductsData();
  }

  public getProductsData(): void {
    this.isLoading = true;
    this._apiService.get('products').subscribe((response: any) => {
      this.isLoading = false;
      this._utilitiesService.slideBanner();
      this.productsData = response;
      this.backgroundImageUrl =
        apiURL + this.productsData.banner.background_Image.url;
    });
  }
}
