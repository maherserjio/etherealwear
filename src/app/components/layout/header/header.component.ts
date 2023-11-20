import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private _router: Router) { }

  toCart(): void {
    this._router.navigate(['/cart']);
  }

  navigatoTo(route: string): void {
    document.getElementById('menu-toggle')?.click();;
    this._router.navigate([`/${route}`]);
  }

}
