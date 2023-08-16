import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiURL } from 'src/app/app.variable';
import { CartService } from 'src/app/cart/cart.service';
import {
  ICategory,
  ICollection,
  IProduct,
} from 'src/app/interfaces/categories.interface';
import { ISingleProduct } from 'src/app/interfaces/single-product';
import { ApiService } from 'src/app/services/api/api.service';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  apiUrl = apiURL;
  backgroundImageUrl!: string;
  productId!: string;
  isLoading = true;
  singleProductData!: ISingleProduct;
  categoriesData!: ICategory[];
  selectedCategoryCollections: ICollection[] = [];
  selectedProducts: IProduct[] = [];
  selectedProduct!: IProduct;
  quantity: number = 1;
  totalPrice: any;

  constructor(
    private route: ActivatedRoute,
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProductItemData();
    this.getCategoriesData();
    this.listenToRouteParams();
  }

  addToCart() {
    // Add your logic to get the item to add to the cart
    this.cartService.addToCart({
      ...this.selectedProduct,
      quantity: this.quantity,
      totalPrice: this.totalPrice,
    });
    this.showMessage(
      'Success',
      'Product added to cart Succesfully',
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

  calculateTotalPrice() {
    const price = parseFloat(
      this.selectedProduct.price.replace(/[^0-9.-]+/g, '')
    );
    this.totalPrice = Math.ceil(price * this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateTotalPrice();
  }

  public getProductItemData(): void {
    this._apiService
      .get('single-product')
      .subscribe((response: ISingleProduct) => {
        this.singleProductData = response;
        this.backgroundImageUrl =
          apiURL + this.singleProductData.banner.background_Image.url;
      });
  }

  public listenToRouteParams(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }

  public getCategoriesData(): void {
    this._apiService.get('categories').subscribe({
      next: (response: ICategory[]) => {
        this.isLoading = false;
        this.categoriesData = response;
        this.populateProducts();
        this._utilitiesService.slideBanner();
        this.selectedProduct = this.selectedProducts.find(
          (product) => product.id === this.productId
        )!;
        this.calculateTotalPrice();
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }

  public populateProducts(): void {
    for (const category of this.categoriesData) {
      this.selectedCategoryCollections.push(...category.collections);
    }
    for (const collection of this.selectedCategoryCollections) {
      this.selectedProducts.push(...collection.products);
    }
  }
}
