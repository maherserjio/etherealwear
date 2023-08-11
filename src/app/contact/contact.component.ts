import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { UtilitiesService } from '../services/utilities/utilities.service';
import { apiURL } from '../app.variable';
import { IContactData } from '../interfaces/contact.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  sub1!: Subscription;
  isLoading = false;
  backgroundImageUrl!: string;
  contactData!: IContactData;
  constructor(
    private _apiService: ApiService,
    private _utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.getContacttData();
  }

  public getContacttData(): void {
    this.isLoading = true;
    this._apiService.get('contact').subscribe({
      next: (response: IContactData) => {
        this.isLoading = false;
        this._utilitiesService.slideBanner();
        this.contactData = response;
        this.backgroundImageUrl =
          apiURL + this.contactData.banner.background_Image.url;
      },
      error: (e) => console.error(e),
      complete: () => '',
    });
  }

 
}
