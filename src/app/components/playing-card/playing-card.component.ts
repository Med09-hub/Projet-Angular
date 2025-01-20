import { Monster } from '../../models/monster.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {
  @Input() monster:Monster=new Monster();
}
