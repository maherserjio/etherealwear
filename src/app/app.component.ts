import { Component, OnInit } from '@angular/core';
import { IFooter } from './interfaces/footer.interface';
import { ApiService } from './services/api/api.service';
import { ICategory } from './interfaces/categories.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading = false;
  footerData!: IFooter;
  categoriesData!: ICategory[];

  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getFooterData();
    this.getCategoriesData();
  }

  getFooterData(): void {
    this.isLoading = true;
    this._apiService.get('footer').subscribe((response: IFooter) => {
      this.footerData = response;
    });
  }

  public getCategoriesData(): void {
    this._apiService.get('categories').subscribe({
      next: (response: ICategory[]) => {
        this.categoriesData = response;
        this.isLoading = false;
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }
}
