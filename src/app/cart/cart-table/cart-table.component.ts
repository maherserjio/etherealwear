import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from 'src/app/interfaces/home.interface';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss'],
})
export class CartTableComponent implements OnInit {
  cartItems: IProduct[] = [];
  cartTotal = 0;
  showCheckOutForm = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems().slice();
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    for (const item of this.cartItems) {
      const price = parseFloat(
        item.price.replace(/[^0-9.-]+/g, '')
      );
      item.totalPrice =  Math.ceil(price * item.quantity);
      this.cartTotal += item.totalPrice!;
    }
  }

  checkout(): void {
    this.showMessage(
      'Checkout',
      'Are you sure you want to checkout?',
      'warning',
      true
    ).then((result) => {
      if (result.isConfirmed) {
        this.showCheckOutForm = true;
        setTimeout(() => {
          let cartItemsValue = '';
          let cartItemsInput = document.getElementById(
            'cartItemsInput'
          ) as HTMLInputElement;
          for (const item of this.cartItems) {
            cartItemsValue += `  ${item.Name} - ${item.quantity} - ${item.price}`;
          }
          if (cartItemsInput) {
            cartItemsInput.value = cartItemsValue;
          }
          let cartTotal = document.getElementById(
            'cartTotal'
          ) as HTMLInputElement;
          cartTotal.value = '$' + String(this.cartTotal);
        }, 500);
      } else {
        this.showCheckOutForm = false;
        // User clicked on the cancel button or closed the popup
        // Handle the cancellation or do nothing
      }
    });
  }
  public submitForm(): void {
    const form = document.getElementById('checkout') as HTMLFormElement;
    form.submit();
    this.showMessage(
      'Success',
      'We received your order! Our sales representative will contact you soon. Thanks for shopping with us!',
      'success',
      false
    );
  }

  showMessage(
    title: string,
    message: string,
    icon: string,
    showCancelButton = true
  ) {
    return Swal.fire({
      title: title,
      text: message,
      icon: icon as SweetAlertIcon,
      showCancelButton: showCancelButton,
    });
  }
}
