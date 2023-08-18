import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { apiURL } from '../app.variable';
import { IProductData } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/categories.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  isLoading = false;
  backgroundImageUrl!: string;
  productsData!: IProductData;
  categoriesData!: ICategory[];
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this._utilitiesService.initializeCarouselConfig();
    this.getProductsData();
    this.getCategoriesData();
  }

  public getProductsData(): void {
    this.isLoading = true;
    this._apiService.get('products').subscribe({
      next: (response: IProductData) => {
        this.productsData = response;
        if (this.productsData.banner.background_Image) {
          this.backgroundImageUrl =
            apiURL +
            this.productsData.banner.background_Image.formats.small?.url;
        }
      },
      error: (e) => console.error(e),
      complete: () => {},
    });
  }

  public getCategoriesData(): void {
    this._apiService.get('categories').subscribe({
      next: (response: ICategory[]) => {
        this.isLoading = false;
        this.categoriesData = response;
        this._utilitiesService.slideBanner();
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }
}
