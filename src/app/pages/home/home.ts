import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Intro } from './components/intro/intro';

@Component({
  selector: 'app-home',
  imports: [Intro],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
