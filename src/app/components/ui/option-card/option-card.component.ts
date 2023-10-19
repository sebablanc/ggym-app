import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
})
export class OptionCardComponent  implements OnInit {

  @Input('icon') iconName: string = '';
  @Input('label') text: string = '';
  @Output('clicked') cardClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
