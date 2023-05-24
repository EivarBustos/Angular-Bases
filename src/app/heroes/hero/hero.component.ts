import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = 'Iroman';
  public age :number= 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }


  changeHero():string{

    return this.name='Midoria'

  }

  changeAge():number{
    return this.age=35
  }


  resetForm():void{
    this.age=45

    this.name='Iroman'


//  CUIDADO CON ESTE CODIGO

//     document.querySelectorAll('h1')!.forEach(element =>{
//       element.innerHTML='<h1>Desde Angular</h1>'
//  });
    }
  }





