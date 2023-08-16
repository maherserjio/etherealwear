import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IProduct[] = [];

  addToCart(item: IProduct) {
    this.cartItems.push({ ...item });
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCartItems(): void {
    this.cartItems = [];
  }
}
