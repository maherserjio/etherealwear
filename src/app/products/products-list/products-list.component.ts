import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { apiURL } from 'src/app/app.variable';
import {
  ICategory,
  ICollection,
} from 'src/app/interfaces/categories.interface';
import { IProduct } from 'src/app/interfaces/home.interface';
import { IProductData } from 'src/app/interfaces/product.interface';
import { UtilitiesService } from 'src/app/services/utilities/utilities.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  apiUrl = apiURL;
  @Input() productsData!: IProductData;
  @Input() categoriesData!: ICategory[];
  selectedCategory: ICategory | undefined;
  selectedCategoryCollections: ICollection[] = [];
  selectedProducts: IProduct[] = [];
  visibleProducts: IProduct[] = [];
  currentPage = 1;
  pageSize = 9;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private _utitlitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.listenToRouteParams();
  }

  public updateVisibleProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.visibleProducts = this.selectedProducts.slice(startIndex, endIndex);
    this.isLoading = false;
  }

  public changePage(page: number): void {
    this.currentPage = page;
    this.updateVisibleProducts();
  }

  get totalPages(): number[] {
    const total = Math.ceil(this.selectedProducts.length / this.pageSize);
    return Array(total)
      .fill(0)
      .map((_, index) => index + 1);
  }

  public resets(): void {
    this.selectedProducts = [];
    this.visibleProducts = [];
    this.selectedCategoryCollections = [];
    this.currentPage = 1;
  }

  public listenToRouteParams(): void {
    this.route.queryParams.subscribe((params) => {
      const param1 = params['categoryName'];
      this._utitlitiesService.slideBanner();
      this.resets();
      if (param1) {
        this.selectedCategory = this.categoriesData.find(
          (category: ICategory) => {
            if (category.categoryName === param1) {
              this.selectedCategoryCollections.push(...category.collections);
              for (const collection of this.selectedCategoryCollections) {
                this.selectedProducts.push(...collection.products);
              }
              return category;
            } else {
              return null;
            }
          }
        ) as ICategory;
        this.updateVisibleProducts();
      } else {
        for (const category of this.categoriesData) {
          this.selectedCategoryCollections.push(...category.collections);
        }
        for (const collection of this.selectedCategoryCollections) {
          this.selectedProducts.push(...collection.products);
        }
        this.updateVisibleProducts();
      }
    });
  }
}
