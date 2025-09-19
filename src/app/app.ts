import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
