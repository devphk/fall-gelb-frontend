import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage } from '@shared/models';
import { Configs } from '@shared/models/configs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private http:HttpService) { }

  getConfigs(): Observable<Configs[]> {
    return this.http.get('/settings');
  }

  createConfig(data: any): Observable<Configs[]> {
    return this.http.post('/settings', data, undefined, true, LoadingMessage.CREATING_CONFIG);
  }

  deleteConfig(id:number) {
    return this.http.delete(`/settings/${id}`, undefined, true, LoadingMessage.DELETING_CONFIG);
  }

  editConfig(data: any, id:number) {
    return this.http.put(`/settings/${id}`, data)
  }}
