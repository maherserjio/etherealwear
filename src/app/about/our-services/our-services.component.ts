import { Component, Input, OnInit } from '@angular/core';
import { IServicesSection } from 'src/app/interfaces/about.interface';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  @Input() servicesData!: IServicesSection[];
  constructor() {}
  ngOnInit(): void {}
}
