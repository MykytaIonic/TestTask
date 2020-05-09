import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DrinkPage } from './drink.page';

import { DrinkPageRoutingModule } from './drink-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkPageRoutingModule
  ],
  declarations: [DrinkPage]
})
export class DrinkPageModule {}
