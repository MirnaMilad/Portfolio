import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
