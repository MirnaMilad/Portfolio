import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NAV_ITEMS } from './navbar.config';
import { NavItems } from './navbar.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  navItems: NavItems[] = NAV_ITEMS;
}
