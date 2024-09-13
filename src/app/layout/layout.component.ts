import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  openedMenus: { [key: string]: boolean } = {};

  toggleMenu(menu: string): void {
    this.openedMenus[menu] = !this.openedMenus[menu];
  }

  isMenuOpen(menu: string): boolean {
    return this.openedMenus[menu];
  }
}


