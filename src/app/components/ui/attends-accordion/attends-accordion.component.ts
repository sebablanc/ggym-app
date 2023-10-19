import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AttendModel } from 'src/app/models/AttendModel';

@Component({
  selector: 'app-attends-accordion',
  templateUrl: './attends-accordion.component.html',
  styleUrls: ['./attends-accordion.component.scss'],
})
export class AttendsAccordionComponent  implements OnInit {
  @Input() list: AttendModel[] = [];
  @Output('delete') deleteClicked: EventEmitter<number> = new EventEmitter();
  day: number = 0;
  param = {day: this.day}

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    let attend = this.list[0];
    if(attend.attendDate) {
      this.day = new Date(attend.attendDate).getDate();
      this.param = {day: this.day}
    }
  }

}
