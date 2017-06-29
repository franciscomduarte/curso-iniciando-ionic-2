import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTest } from './menu-test';

@NgModule({
  declarations: [
    MenuTest,
  ],
  imports: [
    IonicPageModule.forChild(MenuTest),
  ],
  exports: [
    MenuTest
  ]
})
export class MenuTestModule {}
