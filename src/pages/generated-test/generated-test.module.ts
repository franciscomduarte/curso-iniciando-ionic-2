import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneratedTest } from './generated-test';

@NgModule({
  declarations: [
    GeneratedTest,
  ],
  imports: [
    IonicPageModule.forChild(GeneratedTest),
  ],
  exports: [
    GeneratedTest
  ]
})
export class GeneratedTestModule {}
