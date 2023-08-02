import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeData!: any;
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    this._apiService.get('home').subscribe((response: any) => {
      this.homeData = response;
      console.log(response);
    });
  }
}
