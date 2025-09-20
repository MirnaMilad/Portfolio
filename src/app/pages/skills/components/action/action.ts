import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-action',
  imports: [RouterModule],
  templateUrl: './action.html',
  styleUrl: './action.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Action {}
