import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'qs-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomeComponent {

}
