import { Component, computed, inject, model, signal } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';
import { SMonsterService } from './services/monster/s-monster.service';



@Component({
  selector: 'app-root',
 standalone:true,
 imports:[SearchBarComponent,PlayingCardComponent,CommonModule],
  templateUrl:'./app.component.html',
  styleUrl : './app.component.css',
 
})
export class AppComponent {
  ms =inject(SMonsterService);
  monsters = signal<Monster[]>([]);
  count:number=0;
  search='';
search1=model('');

filteredMonsters = computed (() => {
  return this.monsters().filter(monster => monster.name.includes(this.search1()));
})

 constructor() {
  this.monsters.set(this.ms.getAll());
}

 increaseCount(){
  this.count++ ;
 }
addMonster (){
  const genericMonster =new Monster();
  this.ms.add(genericMonster);
  this.monsters.set(this.ms.getAll());
}

 
}
