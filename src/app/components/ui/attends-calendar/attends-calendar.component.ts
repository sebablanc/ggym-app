import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateUtils } from 'src/app/utils/dateUtils';
import { ATTENDS_DICTIONARY } from './attends-calendar.models';
import { MONTHS_OPTIONS } from '../options-picker/options-picker.models';
import { AttendModel } from 'src/app/models/AttendModel';

@Component({
  selector: 'app-attends-calendar',
  templateUrl: './attends-calendar.component.html',
  styleUrls: ['./attends-calendar.component.scss'],
})
export class AttendsCalendarComponent  implements OnInit {
  @Input() monthNumber: number = 0;
  @Input() yearNumber: number = 0;
  @Input() attendsDictionary: ATTENDS_DICTIONARY = {};
  @Output('data') sendData: EventEmitter<AttendModel[] | null> = new EventEmitter();
  
  month: string = '';
  daysOfMonth: number[] = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.monthNumber === 0 && this.yearNumber === 0){
      let today = new Date();
      this.monthNumber = today.getMonth();
      this.yearNumber = today.getFullYear();
    }
    this.updateDaysList();
    this.changeMonthName();
  }

  changeMonthName() {
    this.month = MONTHS_OPTIONS.filter(val => val.value === this.monthNumber)[0].text + ' de ' + this.yearNumber;
  }

  updateDaysList() {
    this.daysOfMonth = DateUtils.createDaysMonthList(this.monthNumber, this.yearNumber);
  }

}
