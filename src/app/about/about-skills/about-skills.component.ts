import { Component, Input, OnInit } from '@angular/core';
import { apiURL } from 'src/app/app.variable';
import { ISkillsSection } from 'src/app/interfaces/about.interface';

@Component({
  selector: 'app-about-skills',
  templateUrl: './about-skills.component.html',
  styleUrls: ['./about-skills.component.scss'],
})
export class AboutSkillsComponent implements OnInit {
  apiUrl = apiURL;
  @Input() skillsData!: ISkillsSection;
  constructor() {}
  ngOnInit(): void {}
}
