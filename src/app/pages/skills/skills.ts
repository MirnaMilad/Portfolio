import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Categories } from './components/categories/categories';

@Component({
  selector: 'app-skills',
  imports: [Categories],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {}
