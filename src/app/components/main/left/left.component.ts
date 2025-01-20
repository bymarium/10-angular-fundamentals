import { Component, output } from '@angular/core';

@Component({
  selector: 'app-left',
  imports: [],
  templateUrl: './left.component.html',
  styleUrl: './left.component.scss'
})
export class LeftComponent {
  public click = output<boolean>();

  public openModal() {
    this.click.emit(true);
  }
}
