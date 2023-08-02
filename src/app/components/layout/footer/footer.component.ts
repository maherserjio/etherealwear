import { Component, Input } from '@angular/core';
import { IFooter } from 'src/app/interfaces/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() footerData!: IFooter;
}
