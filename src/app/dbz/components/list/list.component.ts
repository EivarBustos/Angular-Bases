import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/carcater.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[
    {
      name:'Trunk',
      power:8500
    }
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string){
    if (!id) return;
    this.onDelete.emit(id)
  }

}
