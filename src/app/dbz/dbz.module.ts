import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { DragonComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    DragonComponent,
    ListComponent,
    AddCharacterComponent
  ],
   exports:[
    DragonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
