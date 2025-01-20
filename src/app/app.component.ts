import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';


@Component({
  selector: 'app-root',
 standalone:true,
 imports:[PlayingCardComponent],
  templateUrl:'./app.component.html',
  styleUrl : './app.component.css',
 
})
export class AppComponent {
 monster1:Monster;

 constructor() {
  this.monster1=new Monster();
  this.monster1.name="Piakachu 2";
  this.monster1.hp=99;
  this.monster1.figureCaption ="N°002 Monster";
  this.monster1.attackName="Eclaire";
  this.monster1.attackStrengh=98;
  this.monster1.attackDescription="Pikachu est l'un des pokemons de la famille electrique";
 }
}
