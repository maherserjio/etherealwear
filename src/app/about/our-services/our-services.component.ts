import { Component, Input, OnInit } from '@angular/core';
import { apiURL } from 'src/app/app.variable';
import { IServicesSection } from 'src/app/interfaces/about.interface';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  apiUrl = apiURL;
  @Input() servicesData!: IServicesSection;
  constructor() {}
  ngOnInit(): void {}
}
