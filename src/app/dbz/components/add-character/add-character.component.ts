import { Component , EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/carcater.interface';
import { Output } from '@angular/core';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public caracter: Character={
    name:'',
    power:0
  }

  emitCharacter(){
    console.log(this.caracter);

    if(this.caracter.name.length === 0) return;

    this.onNewCharacter.emit({...this.caracter});


    this.caracter={name:'', power: 0}
  }
}
