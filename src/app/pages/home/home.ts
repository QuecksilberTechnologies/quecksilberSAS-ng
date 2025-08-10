import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qs-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Home {}
