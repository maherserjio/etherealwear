import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { ApiService } from '../services/api/api.service';
import { apiURL } from '../app.variable';
import { ICartData } from '../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  isLoading = false;
  backgroundImageUrl!: string;
  cartData!: ICartData;

  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this._utilitiesService.initializeCarouselConfig();
    this.getCartData();
  }

  public getCartData(): void {
    this.isLoading = true;
    this._apiService.get('cart').subscribe((response: ICartData) => {
      this.isLoading = false;
      this._utilitiesService.slideBanner();
      this.cartData = response;
      this.backgroundImageUrl =
        apiURL + this.cartData.banner.background_Image.url;
    });
  }
}
