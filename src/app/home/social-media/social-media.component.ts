import { Component, Input, OnInit } from '@angular/core';
import { apiURL } from 'src/app/app.variable';
import { ISocialMediaSection } from 'src/app/interfaces/home.interface';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  apiUrl = apiURL;
  @Input() socialMediaData!: ISocialMediaSection;

  ngOnInit(): void {}
}
