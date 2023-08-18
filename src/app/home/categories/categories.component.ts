import { Component, Input, OnInit } from '@angular/core';
import { ICategoriesCircleSection } from 'src/app/interfaces/home.interface';
import { apiURL } from 'src/app/app.variable';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categoriesData!: ICategoriesCircleSection[];
  apiUrl = apiURL;
  mainCategoryCircleBackgroundImage!: string;
  filteredCategoriesCirlce: ICategoriesCircleSection[] = [];

  ngOnInit(): void {
    for (const category of this.categoriesData) {
      if (category.isMainCircle) {
        if (category.background_Image) {
          this.mainCategoryCircleBackgroundImage =
            apiURL + category.background_Image?.formats?.medium?.url;
        }
      } else {
        this.filteredCategoriesCirlce.push(category);
      }
    }
  }
}
