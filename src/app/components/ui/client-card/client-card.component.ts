import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CARD_BUTTONS } from './client-card.models';
import { ClientModel } from 'src/app/models/clientModel';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent implements OnInit {
  @Input('client') clientData: ClientModel | null = null;
  @Output('clicked') sendData: EventEmitter<{ client: ClientModel, ev: string }> = new EventEmitter();
  buttons = CARD_BUTTONS;

  constructor() { }

  ngOnInit() {
  }

  emitData(ev: string) {
    if (this.clientData)
      this.sendData.emit({
        client: this.clientData,
        ev: ev
      })
  }

}
