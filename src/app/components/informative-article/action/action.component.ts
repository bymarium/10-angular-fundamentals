import { Component, input } from '@angular/core';

@Component({
  selector: 'app-action',
  imports: [],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {
  public svg = input<string>();
  public title = input<string>();
}
