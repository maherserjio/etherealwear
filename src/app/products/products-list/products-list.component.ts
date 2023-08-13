import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/interfaces/categories.interface';
import { IProductData } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() productsData!: IProductData;
  @Input() categoriesData!: ICategory[];
  selectedCategory: ICategory | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.listenToRouteParams();
  }

  public listenToRouteParams(): void {
    this.route.queryParams.subscribe((params) => {
      const param1 = params['0'];
      if (param1) {
        this.selectedCategory = this.categoriesData.find(
          (category: ICategory) => {
            if (category.categoryName === param1) {
              return category;
            } else {
              return null;
            }
          }
        ) as ICategory;
      }
    });
  }
}
