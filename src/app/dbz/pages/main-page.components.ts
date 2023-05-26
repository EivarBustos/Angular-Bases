
import { Component } from '@angular/core';
import { Character } from '../interfaces/carcater.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class DragonComponent  {

constructor(private dbzService: DbzService){}

get characters(): Character[]{
  return [...this.dbzService.caracters] ;
}

onDeleteCharacter(id: string):void{
  this.dbzService.deletCharacterById(id)
}

onNewCharacter(character:Character):void{
  this.dbzService.addNewCharacters(character);
}

}
