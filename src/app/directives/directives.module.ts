import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetTrafficLightsDirective } from './alphabet-traffic-lights/alphabet-traffic-lights.directive';



@NgModule({
  declarations: [
    AlphabetTrafficLightsDirective
  ],
  exports: [
    AlphabetTrafficLightsDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
