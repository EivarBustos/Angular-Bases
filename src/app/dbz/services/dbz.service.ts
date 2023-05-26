import { Injectable } from '@angular/core';
import{v4 as uuid} from 'uuid';


import { Character } from '../interfaces/carcater.interface';

@Injectable(
  {
    providedIn: 'root'
  })

export class DbzService {

   public caracters:Character[]=[
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:1000
    },

    {
      id:uuid(),
      name:'goku',
      power:9500
    }
  ];

  addNewCharacters(character: Character){
    const newCharacter:Character={id:uuid(), ...character}

    this.caracters.push(newCharacter)
  }

  // onDeleteCharacter(index:number){
  //   this.caracters.splice(index,1);
  // }

  deletCharacterById(id:string){
   this.caracters=this.caracters.filter(character=> character.id !== id);
  }

}
