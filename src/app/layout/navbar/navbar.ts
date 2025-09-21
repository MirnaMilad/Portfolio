import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_ITEMS } from './navbar.config';
import { NavItems } from './navbar.model';
import { RouterModule } from '@angular/router';

declare const bootstrap: {
  Offcanvas: {
    getInstance: (element: HTMLElement) => { hide: () => void } | null;
  };
  Collapse: {
    getInstance: (element: HTMLElement) => { hide: () => void } | null;
  };
};

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  navItems: NavItems[] = NAV_ITEMS;

  closeOffcanvas(): void {
    const offcanvasElement: HTMLElement | null =
      document.getElementById('mobileSidebar');
    if (offcanvasElement) {
      const offcanvas: { hide: () => void } | null =
        bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (offcanvas) {
        offcanvas.hide();
      }
    }
  }
}
