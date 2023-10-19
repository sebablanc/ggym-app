import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COLUMN_PICKER_TYPE } from './options-picker.models';

@Component({
  selector: 'app-options-picker',
  templateUrl: './options-picker.component.html',
  styleUrls: ['./options-picker.component.scss'],
})
export class OptionsPickerComponent  implements OnInit {
  @Input() columns: COLUMN_PICKER_TYPE[] | null = null;
  @Output('data') sendData: EventEmitter<any> = new EventEmitter();

  public buttons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Confirmar',
      handler: (value: any) => {
        this.sendData.emit(value);
      },
    },
  ];

  constructor() { }

  ngOnInit() {}

}
