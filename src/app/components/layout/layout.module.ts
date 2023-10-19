import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LayoutWithMenuComponent } from './layout-with-menu/layout-with-menu.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    LayoutWithMenuComponent
  ],
  exports: [
    LayoutWithMenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    UiModule
  ]
})
export class LayoutModule { }
