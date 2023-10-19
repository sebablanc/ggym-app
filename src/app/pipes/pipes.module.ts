import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityAttendsLabelPipe } from './quantity-attends-label/quantity-attends-label.pipe';



@NgModule({
  declarations: [
    QuantityAttendsLabelPipe
  ],
  exports: [
    QuantityAttendsLabelPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
