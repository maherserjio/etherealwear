import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { IFooter } from './interfaces/footer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  footerData!: IFooter;
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getFooterData();
  }

  getFooterData(): void {
    this._apiService.get('footer').subscribe((response: IFooter) => {
      this.footerData = response;
    });
  }
}
