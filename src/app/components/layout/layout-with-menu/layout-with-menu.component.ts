import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HEADER_TYPES } from '../../ui/header/header.interfaces';

@Component({
  selector: 'app-layout-with-menu',
  templateUrl: './layout-with-menu.component.html',
  styleUrls: ['./layout-with-menu.component.scss'],
})
export class LayoutWithMenuComponent  implements OnInit {
  @Input() title: string = 'GGym';
  @Output('back') backClicked: EventEmitter<boolean> = new EventEmitter();
  menuType = HEADER_TYPES.MENU;
  @Input() headerType = HEADER_TYPES.MENU;

  constructor() { }

  ngOnInit() {}

}
