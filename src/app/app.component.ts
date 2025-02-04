import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@Component({
  selector: 'app-root',
 standalone:true,
 imports:[SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl : './app.component.css',
 
})
export class AppComponent {
 monster1:Monster;
  count:number=0;
  search='';
 constructor() {
  this.monster1=new Monster();
  this.monster1.name="Piakachu 2";
  this.monster1.hp=100;
  this.monster1.figureCaption ="N°002 Monster";
  this.monster1.attackName="Eclaire";
  this.monster1.attackStrengh=98;
  this.monster1.attackDescription="Pikachu est l'un des pokemons de la famille electrique";
 }
 increaseCount(){
  this.count++ ;
 }
}
