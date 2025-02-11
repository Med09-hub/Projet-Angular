import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Monster } from '../../models/monster.model';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent implements OnChanges{

  @Input () monster=new Monster();
MonsterTypeIcon: string ="assets/flash.png";
backgroudColor:string = "rgb(255.255.104)";
ngOnChanges(changes: SimpleChanges): void {
  if (changes['monster']){
    if (changes['monster'].previousValue?.type !=changes ['monster'].currentValue.type) {
      this.MonsterTypeIcon = MonsterTypeProperties[this.monster.type].imageUrl;
      this.backgroudColor = MonsterTypeProperties[this.monster.type].color;
    }
  }
}
}
