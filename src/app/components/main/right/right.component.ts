import { Component } from '@angular/core';
import { ArticleComponent } from '../../article/article.component';
import { picturesArrow } from './pictures/arrow';
import { picturesSwap } from './pictures/swap';
import { picturesActivity } from './pictures/activity';
import { picturesExplore } from './pictures/explore';
import { picturesToken } from './pictures/token';
import { picturesStake } from './pictures/stake';
import { picturesBrowser } from './pictures/browser';
import { InformativeArticleComponent } from "../../informative-article/informative-article.component";

@Component({
  selector: 'app-right',
  imports: [ArticleComponent, InformativeArticleComponent],
  templateUrl: './right.component.html',
  styleUrl: './right.component.scss'
})
export class RightComponent {
  public arrow = {
    svg: 'arrow',
    color: 'arrow',
    classModifier: 'arrow',
    titleModifier: 'mini',
    title: 'EXPLORE <br> GLOW FEATURES',
    pictures: picturesArrow
  }

  public swap = {
    svg: 'swap',
    color: 'blue',
    title: 'Swap Coins with Zero Fees',
    pictures: picturesSwap
  }

  public activity = {
    svg: 'activity',
    color: 'orange',
    title: 'All your activity. In one place.',
    pictures: picturesActivity
  }

  public explore = {
    svg: 'explore',
    color: 'green',
    modifier: 'three',
    title: 'Effortlessly Explore NFTs',
    pictures: picturesExplore
  }

  public token = {
    svg: 'token',
    color: 'red',
    modifier: 'circle',
    title: 'Received spam tokens? <br> Burn them and earn SOL.',
    pictures: picturesToken
  }

  public stake = {
    svg: 'stake',
    color: 'purple',
    title: 'Stake and Earn SOL',
    pictures: picturesStake
  }

  public browser = {
    svg: 'browser',
    color: 'mustard',
    title: 'Connect to apps on desktop, <br> and on-the-go.',
    pictures: picturesBrowser
  }
}
