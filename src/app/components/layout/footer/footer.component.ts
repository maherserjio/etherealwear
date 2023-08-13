import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/categories.interface';
import { IFooter } from 'src/app/interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() footerData!: IFooter;
  @Input() categoriesData!: ICategory[];

  ngOnInit(): void {}
}
