import { Monster } from '../../models/monster.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent {
  @Input ({
    alias:'my monster' ,
    transform: (value: Monster) => {
      value.hp =value.hp / 2 ;
      return value ;
    }
  }) monster:Monster=new Monster();
}
