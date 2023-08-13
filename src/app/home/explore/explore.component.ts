import { Component, Input, OnInit } from '@angular/core';
import { apiURL } from 'src/app/app.variable';
import { IExploreSection } from 'src/app/interfaces/home.interface';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  apiUrl = apiURL;
  @Input() exploreData!: IExploreSection;

  ngOnInit(): void {}
}
