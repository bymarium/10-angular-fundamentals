import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';

@Component({
  selector: 'app-main',
  imports: [LeftComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
