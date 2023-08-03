import { Component, OnInit } from '@angular/core';
import { IFooter } from './interfaces/footer.interface';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading = false;
  footerData!: IFooter;
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getFooterData();
  }

  getFooterData(): void {
    this.isLoading = true;
    this._apiService.get('footer').subscribe((response: IFooter) => {
      this.isLoading = false;
      this.footerData = response;
    });
  }
}
