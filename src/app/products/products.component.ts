import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { apiURL } from '../app.variable';
import { Subscription } from 'rxjs';
import { IProductData } from '../interfaces/product.interface';
import { ICategory } from '../interfaces/categories.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  sub1!: Subscription;
  isLoading = false;
  backgroundImageUrl!: string;
  productsData!: any;
  categoriesData!: ICategory;
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this._utilitiesService.initializeCarouselConfig();
    //this.getCategoriesData();
    this.getProductsData();
  }

  public getProductsData(): void {
    this.isLoading = true;
    this._apiService.get('products').subscribe({
      next: (response: IProductData) => {
        this.productsData = response;
        this.backgroundImageUrl =
          apiURL + this.productsData.banner.background_Image.url;
      },
      error: (e) => console.error(e),
      complete: () => {},
    });
  }

  public getCategoriesData(): void {
    this._apiService.get('categories').subscribe({
      next: (response: any) => {
        console.log(response);
        this.isLoading = false;
        this.categoriesData = response;
        this._utilitiesService.slideBanner();
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }
}
