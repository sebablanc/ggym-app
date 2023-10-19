import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HEADER_TYPES } from './header.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Output('back') backClicked: EventEmitter<boolean> = new EventEmitter();
  @Input() title: string = '';
  @Input() type: string = HEADER_TYPES.MENU;

  types = HEADER_TYPES;
  
  constructor() { }

  ngOnInit() {}

}
