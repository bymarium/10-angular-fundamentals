import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public links =[
    'https://docs.glow.app/',
    'https://glow.app/support',
    'https://glow.app/terms',
    'https://glow.app/privacy-policy',
    'https://glow.app/bug-bounty',
    'https://twitter.com/glowwallet'
  ];
  public names = ['Docs', 'Support', 'Terms', 'Privacy', 'Bug Bounty'];
}
