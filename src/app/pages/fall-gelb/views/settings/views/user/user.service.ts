import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { LoadingMessage, User } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpService) { }

  getUsers (): Observable<User[]> {
    return this.http.get('/users');
  }

  createUser (data:any): Observable<User[]> {
    return this.http.post('/users', data, undefined, true, LoadingMessage.CREATING_USER);
  }

  deleteUsers(id:number) {
    return this.http.delete('/users/'+ id, undefined, true, LoadingMessage.DELETING_USER);
  }

  getUser(id:number){
    return this.http.get('/users/'+ id);
  }

  editUser(data:any, id:number){
    return this.http.put(`/users/${id}`, data);
  }
}
