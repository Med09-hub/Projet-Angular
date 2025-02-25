import { Inject, Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';
import { DOCUMENT } from '@angular/common';

@Injectable({
	providedIn: 'root'
})
export class SMonsterService  {

	monsters: Monster[] = [];
	currentId: number = 1;
	
	constructor(@Inject(DOCUMENT) private document: Document) {
		this.load();
	}

	private save() {
		this.document.defaultView?.localStorage?.setItem('monster', JSON.stringify(this.monsters));
	}

	private load() {
		const monstersData = this.document.defaultView?.localStorage?.getItem('monsters');
		if (monstersData) {
			this.monsters = JSON.parse(monstersData).map((monsterJson: any) => Object.assign(new Monster(), monsterJson));
			this.currentId = Math.max(...this.monsters.map(monster => monster.id)) + 1;
		} else {
			this.init();
			this.save();
		}
	}

	private init() {

		this.monsters = [];

    const monster1=new Monster ();
    monster1.name="Pikachu ";
    monster1.hp=100;
    monster1.figureCaption ="N°001 Monster";
    monster1.attackName="Eclaire";
    monster1.attackStrength=98;
    monster1.attackDescription="Pikachu est l'un des pokemons de la famille electrique";
    this.monsters.push(monster1) ;
		this.currentId++;

		const monster2=new Monster ();
    monster2.name="Carapuce";
    monster2.image="assets/square1.jpg";
    monster2.type=MonsterType.water;
    monster2.hp=90;
    monster2.figureCaption ="N°002 Monster";
    monster2.attackName="tourbillon eau";
    monster2.attackStrength=88;
    monster2.attackDescription="Carapuce est l'un des pokemons de la famille eau";
    this.monsters.push(monster2) ;
		this.currentId++;

    const monster3=new Monster ();
    monster3.name="Bulbizarre";
    monster3.image="assets/bulbi.jpg";
    monster3.type=MonsterType.plant;
    monster3.hp=77;
    monster3.figureCaption ="N°003 Monster";
    monster3.attackName="griffes plantes";
    monster3.attackStrength=81;
    monster3.attackDescription="Bulbizarre est l'un des pokemons de la famille terre";
    this.monsters.push(monster3) ;
		this.currentId++;

    const monster4 =new Monster ();
    monster4.name="Salameche";
    monster4.image="assets/salam.jpg";
    monster4.type=MonsterType.fire;
    monster4.hp=97;
    monster4.figureCaption ="N°004 Monster";
    monster4.attackName="Souffles de feu";
    monster4.attackStrength=89;
    monster4.attackDescription="Salameche est l'un des pokemons de la famille feu";
    this.monsters.push(monster4) ;
		this.currentId++;
	}

	getAll() {
		return this.monsters.map(monster => monster.copy());
	}

	get(id: number): Monster | undefined {
		const monster = this.monsters.find(monster => monster.id === id)
		return monster ? monster.copy() : undefined;
	}

	add(monster: Monster): Monster {
		const monsterCopy = monster.copy()

		monsterCopy.id = this.currentId;
		this.monsters.push(monsterCopy.copy());
		this.save();

		this.currentId++;

		return monsterCopy;
	}

	update(monster: Monster): Monster {
		const monsterCopy = monster.copy();

		const monsterIndex = this.monsters.findIndex(monster => monster.id === monsterCopy.id);
		if (monsterIndex !== -1) {
			this.monsters[monsterIndex] = monsterCopy.copy();
			this.save();
		}

		return monsterCopy;
	}

	delete(id: number) {
		const monsterIndex = this.monsters.findIndex(monster => monster.id === id);
		if (monsterIndex !== -1) {
			this.monsters.splice(monsterIndex, 1);
			this.save();
		}
	}

}
