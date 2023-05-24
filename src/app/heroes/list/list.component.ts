import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
public heroName:string[]=['Thor','Ironman', 'Hulk', 'Spiderman' ];
public deleteHero?:string;

removeLastHero():void{
 this.deleteHero= this.heroName.pop();


 }
}
