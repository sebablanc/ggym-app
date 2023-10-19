import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AttendsService } from 'src/app/services/attend/attends.service';
import { ClientModel } from 'src/app/models/clientModel';
import { ClientSingletonService } from 'src/app/services/clientsSingleton/client-singleton.service';
import { UiModule } from 'src/app/components/ui/ui.module';
import { COLUMN_PICKER_TYPE, MONTHS_OPTIONS } from 'src/app/components/ui/options-picker/options-picker.models';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { HEADER_TYPES } from 'src/app/components/ui/header/header.interfaces';
import { DateUtils } from 'src/app/utils/dateUtils';
import { ATTENDS_DICTIONARY } from 'src/app/components/ui/attends-calendar/attends-calendar.models';
import { AttendModel } from 'src/app/models/AttendModel';
import { AlertService } from 'src/app/services/alert/alert.service';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ROUTES } from 'src/app/services/navigation/navigation.constants';
import { PlanTypes } from 'src/app/enums/plan-types';

@Component({
  selector: 'app-client-attends',
  templateUrl: './client-attends.page.html',
  styleUrls: ['./client-attends.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, UiModule, LayoutModule, PipesModule]
})
export class ClientAttendsPage implements OnInit {
  private searching: Boolean = false;
  headerType = HEADER_TYPES.BACK;
  attendsOfTheDay: AttendModel[] = [];
  daysWithAttends: number = 0;
  clientsRoute = ROUTES.CLIENTS;
  clientPlan: string = '';

  attendsDictionary: ATTENDS_DICTIONARY = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
    18: [],
    19: [],
    20: [],
    21: [],
    22: [],
    23: [],
    24: [],
    25: [],
    26: [],
    27: [],
    28: [],
    29: [],
    30: [],
    31: [],
  };

  currentMonthNumber: number = 0;
  currentYearNumber: number = 2023;

  options: COLUMN_PICKER_TYPE[] = [{
    name: 'months',
    options: MONTHS_OPTIONS
  }, {
    name: 'years',
    options: []
  }]

  cliente: ClientModel | null = null;

  constructor(
    private clientSingletonSrv: ClientSingletonService,
    private attendsSrv: AttendsService,
    private alertSrv: AlertService,
    private navigationSrv: NavigationService,
    private translateSrv: TranslateService) { }

  ngOnInit() {
    this.cliente = this.clientSingletonSrv.getCliente();

    this.currentMonthNumber = new Date().getMonth();
    
    this.createPlanLabel();
    this.populateYearsOptions();

    this.searchAttends();
  }

  createPlanLabel(){
    this.clientPlan =`${this.translateSrv.instant('commons.plan')}: ${this.translateSrv.instant('planes.'+this.cliente?.plan)} ${this.cliente?.plan !== PlanTypes.SEMANA_COMPLETA && ' por semana' || ''}`;
  }

  searchAttends() {
    this.dayClickedHandler([]);
    this.resetAttendsDictionary();
    if (this.cliente && this.cliente.document) {
      this.searching = true;
      let initialDate = DateUtils.createFirstDayOfMonthCurrentYear(this.currentMonthNumber);
      let finalDate = DateUtils.createLastDateOfMonthCurrentYear(this.currentMonthNumber);

      this.attendsSrv.getByClientAndDate(this.cliente.document, initialDate, finalDate).subscribe(data => {
        this.searching = false;
        if (data.success) {
          data.attends.forEach(attend => {
            
            if(attend.attendDate ) {
              let date = new Date(attend.attendDate);
              let day: number = date.getDate();
              this.attendsDictionary[day].push(attend)
            }
          });
          this.checkDaysWithAttends()
        }
      });
    }
  }

  checkDaysWithAttends() {
    this.daysWithAttends = 0;
    for (let index = 1; index < 31; index++) {
      if(this.attendsDictionary[index] && this.attendsDictionary[index].length > 0) ++this.daysWithAttends;
    }
    return this.daysWithAttends;
  }

  populateYearsOptions() {
    DateUtils.createYearsList().sort((a, b) => -1).forEach(year =>
      this.options[1].options.push({
        text: year.toString(),
        value: year
      })
    )
  }

  pickerHandler(ev: any) {
    this.currentMonthNumber = ev.months.value;
    this.currentYearNumber = ev.years.value;

    this.searchAttends();
  }

  goBack() { this.navigationSrv.goTo(this.clientsRoute) }

  dayClickedHandler(event: AttendModel[] | null) {
    this.attendsOfTheDay = event || [];
  }

  async confirmAttendanceDeletion(id: number){
    let del = await this.alertSrv.okCancelAlert(
      this.translateSrv.instant('pages.clientsAttends.alerts.confirmDelete.title'), 
      this.translateSrv.instant('pages.clientsAttends.alerts.confirmDelete.message')
    )

    if(del) this.deleteAttend(id);
  }

  deleteAttend(id: number){
    this.attendsSrv.delete(id).subscribe(data => {
      let title = 'commons.error';

      if (data && data.success) {
        title = 'commons.success';
        this.searchAttends();
      }
      
      this.alertSrv.okAlert(this.translateSrv.instant(title), data.message)
    });
  }

  private resetAttendsDictionary() {
    this.attendsDictionary = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
      17: [],
      18: [],
      19: [],
      20: [],
      21: [],
      22: [],
      23: [],
      24: [],
      25: [],
      26: [],
      27: [],
      28: [],
      29: [],
      30: [],
      31: [],
    }
  }

}
