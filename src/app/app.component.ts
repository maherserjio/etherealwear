import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this.getFooterData();
  }

  getFooterData(): void {
    this._apiService.get('footer').subscribe((response) => {
      console.log(response);
    });
  }
}
