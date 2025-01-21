import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-action',
  imports: [],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss'
})
export class ActionComponent {
  public svg = input<string>();
  public title = input<string>();

  public click = output<boolean>();

  public openModal() {
    this.click.emit(true);
  }
}
