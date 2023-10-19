import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCardComponent } from './option-card/option-card.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { CamButtonComponent } from './cam-button/cam-button.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ClientCardComponent } from './client-card/client-card.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { PassVerifierComponent } from './pass-verifier/pass-verifier.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { OptionsPickerComponent } from './options-picker/options-picker.component';
import { AttendsCalendarComponent } from './attends-calendar/attends-calendar.component';
import { AttendsAccordionComponent } from './attends-accordion/attends-accordion.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    OptionCardComponent,
    CamButtonComponent,
    MenuComponent,
    HeaderComponent,
    ClientCardComponent,
    CommonButtonComponent,
    PassVerifierComponent,
    OptionsPickerComponent,
    AttendsCalendarComponent,
    AttendsAccordionComponent
  ],
  exports: [
    OptionCardComponent,
    CamButtonComponent,
    MenuComponent,
    HeaderComponent,
    ClientCardComponent,
    CommonButtonComponent,
    PassVerifierComponent,
    OptionsPickerComponent,
    AttendsCalendarComponent,
    AttendsAccordionComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    DirectivesModule,
    TranslateModule,
    PipesModule
  ]
})
export class UiModule { }
