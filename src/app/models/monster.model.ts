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
              this.name="pikachu";
              this.hp=10 ;
              this.figureCaption="Geo Impact";
              this.attackName="Eclaire";
              this.attackStrengh=60;
              this.attackDescription="This is a long description...";
       }       
}