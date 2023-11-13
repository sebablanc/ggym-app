import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ClientFormComponent } from './client-form/client-form.component';
import { UiModule } from '../ui/ui.module';
import { AttendsFormComponent } from './attends-form/attends-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    EmailFormComponent,
    ClientFormComponent,
    AttendsFormComponent,
    ChangePasswordFormComponent
  ],
  exports: [
    LoginFormComponent,
    EmailFormComponent,
    ClientFormComponent,
    AttendsFormComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaskitoModule,
    UiModule,
    DirectivesModule,
    TranslateModule
  ]
})
export class CustomFormsModule { }
