import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttendModel } from 'src/app/models/AttendModel';
import { AttendResponseModel } from 'src/app/models/AttendResponseModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttendsService {
  private SAVE_URL = '/attends/save';

  private DELETE_URL = '/attends/delete';
  
  private GET_BY_CLIENT_URL = '/attends/get_by_client';
  
  private GET_BY_CLIENT_AND_DATE_URL = '/attends/get_by_client_and_date';

  constructor(private http: HttpClient) { }

  save(attend: AttendModel) {
    return this.http.post<AttendResponseModel>(environment.baseUrl + this.SAVE_URL, attend);
  }

  delete(id: number){
    return this.http.delete<AttendResponseModel>(`${environment.baseUrl}${this.DELETE_URL}?id=${id}`);
  }

  getByClient(dni: number) {
    return this.http.get<AttendResponseModel>(environment.baseUrl + this.GET_BY_CLIENT_URL + '?dni=' + dni);
  }

  getByClientAndDate(dni: number, initialDate: Date, finalDate: Date) {
    return this.http.get<AttendResponseModel>(`${environment.baseUrl}${this.GET_BY_CLIENT_AND_DATE_URL}?dni=${dni}&initialDate=${initialDate}&finalDate=${finalDate}`);
  }

}
