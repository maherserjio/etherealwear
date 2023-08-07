import { Component, Input, OnInit } from '@angular/core';
import { ICategoriesCircleSection } from 'src/app/interfaces/home.interface';
import { apiURL } from 'src/app/app.variable';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories!: ICategoriesCircleSection[];
  apiUrl = apiURL;
  mainCategoryCircleBackgroundImage!: string;
  filteredCategoriesCirlce: ICategoriesCircleSection[] = [];

  ngOnInit(): void {
    for (const category of this.categories) {
      if (category.isMainCircle) {
        this.mainCategoryCircleBackgroundImage =
          apiURL + category.background_Image.url;
      } else {
        this.filteredCategoriesCirlce.push(category);
      }
    }
  }
}
