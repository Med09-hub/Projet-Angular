import { Component } from '@angular/core';
import { PlayingCardComponent } from "./components/playing-card/playing-card.component";
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';



@Component({
  selector: 'app-root',
 standalone:true,
 imports:[SearchBarComponent,PlayingCardComponent],
  templateUrl:'./app.component.html',
  styleUrl : './app.component.css',
 
})
export class AppComponent {
 monsters! : Monster [];
  count:number=0;
  search='';
  selectedMonsterIndex =0;

 constructor( ) {
  this.monsters = [];
const monster1=new Monster ();
monster1.name="Piakachu ";
monster1.hp=100;
monster1.figureCaption ="N°002 Monster";
monster1.attackName="Eclaire";
monster1.attackStrength=98;
monster1.attackDescription="Pikachu est l'un des pokemons de la famille electrique";
this.monsters.push(monster1) ;

const monster2=new Monster ();
monster2.name="Carapuce";
monster2.image="assets/square1.jpg";
monster2.type=MonsterType.water;
monster2.hp=90;
monster2.figureCaption ="N°003 Monster";
monster2.attackName="tourbillon eau";
monster2.attackStrength=88;
monster2.attackDescription="Carapuce est l'un des pokemons de la famille eau";
this.monsters.push(monster2) ;


const monster3=new Monster ();
monster3.name="Bulbizarre";
monster3.image="assets/bulbi.jpg";
monster3.type=MonsterType.plant;
monster3.hp=77;
monster3.figureCaption ="N°004 Monster";
monster3.attackName="griffes plantes";
monster3.attackStrength=81;
monster3.attackDescription="Bulbizarre est l'un des pokemons de la famille terre";
this.monsters.push(monster3) ;

const monster4 =new Monster ();
monster4.name="Salameche";
monster4.image="assets/salam.jpg";
monster4.type=MonsterType.fire;
monster4.hp=97;
monster4.figureCaption ="N°005 Monster";
monster4.attackName="Souffles de feu";
monster4.attackStrength=89;
monster4.attackDescription="Salameche est l'un des pokemons de la famille feu";
this.monsters.push(monster4) ;
}
 increaseCount(){
  this.count++ ;
 }
 toggleMonster() {
  this.selectedMonsterIndex= (this.selectedMonsterIndex +1) % this.monsters.length ;
 }
 previousMonster() {
  this.selectedMonsterIndex= (this.selectedMonsterIndex -1) % this.monsters.length ;
 }
 
}
