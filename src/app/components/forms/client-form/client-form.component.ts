import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MaskitoElementPredicateAsync, MaskitoOptions } from '@maskito/core';
import { PlanTypes } from 'src/app/enums/plan-types';
import { BarcodeModel } from 'src/app/models/barcodeModel';
import { ClientModel } from 'src/app/models/clientModel';
import { StringUtils } from 'src/app/utils/stringUtils';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent  implements OnInit {
  @Output('data') sendData: EventEmitter<ClientModel> = new EventEmitter();
  @Input('errorMessage') error = "";
  @Input('client') clientSended: ClientModel | null = null;

  readonly phoneMask: MaskitoOptions = {
    mask: ['(', /\d/, /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  planTypesKeys = Object.keys(PlanTypes);

  clientForm = this.fb.nonNullable.group({
    id: [''],
    document: ['', [Validators.required]],
    name: ['', [Validators.required]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    plan: [PlanTypes.UNA_X_SEMANA]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  ngOnChanges(){
    if(this.clientSended && this.clientSended.id > 0) {
      this.clientForm.patchValue({
        id: this.clientSended.id.toString(),
        document: this.clientSended.document.toString(),
        name: this.clientSended.name,
        lastName: this.clientSended.lastName,
        email: this.clientSended.email,
        phone: this.clientSended.phone,
        plan: this.clientSended.plan
      });
    }
  }

  processScanData(event: BarcodeModel) {
    this.clientForm.patchValue({
      document: event.docNumber,
      name: event.name,
      lastName: event.lastName
    })
  }

  formHandler(){
    const controls = this.clientForm.controls;
    this.sendData.emit({
      id: parseInt(controls.id.value),
      document: parseInt(controls.document.value),
      name: StringUtils.capitalizeFirstLetter(controls.name.value),
      lastName: StringUtils.capitalizeFirstLetter(controls.lastName.value),
      email: controls.email.value,
      phone: controls.phone.value,
      plan: controls.plan.value
    })
  }
}
