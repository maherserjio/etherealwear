import { Component, Input, OnInit } from '@angular/core';
import { apiURL } from 'src/app/app.variable';
import { ISliderSection } from 'src/app/interfaces/home.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  apiUrl = apiURL;
  @Input() sliderData!: ISliderSection;

  ngOnInit(): void {}
}
