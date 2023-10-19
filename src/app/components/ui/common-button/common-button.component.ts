import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COMMON_BUTTON_STYLES, COMMON_BUTTON_TYPES, ICOMMON_BUTTON_STYLES } from './common-button.interfaces';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss'],
})
export class CommonButtonComponent  implements OnInit {
  @Input() label: string = '';
  @Input() type: COMMON_BUTTON_TYPES = COMMON_BUTTON_TYPES.PRIMARY;
  @Output('clicked') btnClicked: EventEmitter<boolean> = new EventEmitter();
  style: ICOMMON_BUTTON_STYLES = COMMON_BUTTON_STYLES.PRIMARY;

  constructor() { }

  ngOnInit() {
    this.style = COMMON_BUTTON_STYLES[this.type];
  }

}
