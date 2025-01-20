export class Monster {
       name:string;
       hp:number;
       figureCaption:string;
       attackName:string;
       attackStrengh:number;
       attackDescription:string;

       constructor (
              name?:string,
              hp?:number,
              figureCaption?:string,
              attackName?:string,
              attackStrengh?:number,
              attackDescription?:string
       )
       {
              this.name="pikachu 1";
              this.hp=10 ;
              this.figureCaption="N°001 Monster";
              this.attackName="Eclaire";
              this.attackStrengh=60;
              this.attackDescription="This is a long description...";
       }       
}