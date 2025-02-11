export enum MonsterType {
    plant="plante",
    electric="electrique",
    fire = "feu",
    water = "eau",
}
export interface ImonsterPreperties {
    imageUrl : string;
    color : string;
}
export const MonsterTypeProperties: {[key: string]: ImonsterPreperties} = {
	[MonsterType.plant]: {
		imageUrl: 'assets/plant1.png',
		color: 'rgba(135, 255, 124)'
	},
	[MonsterType.electric]: {
		imageUrl: 'assets/flash.png',
		color: 'rgb(255, 255, 104)'
	},
	[MonsterType.fire]: {
		imageUrl: 'assets/fire.png',
		color: 'rgb(255, 104, 104)'
	},
	[MonsterType.water]: {
		imageUrl: 'assets/water.png',
		color: 'rgba(118, 234, 255)'
	},
}