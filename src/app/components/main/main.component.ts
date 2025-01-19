import { Component } from '@angular/core';
import { LeftComponent } from './left/left.component';
import { RightComponent } from "./right/right.component";

@Component({
  selector: 'app-main',
  imports: [LeftComponent, RightComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
