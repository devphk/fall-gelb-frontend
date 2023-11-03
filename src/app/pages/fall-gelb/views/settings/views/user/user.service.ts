import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { User } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpService) { }

  getUsers (): Observable<User[]> {
    return this.http.get('/users');
  }

  postUsers (data:User): Observable<User[]> {
    return this.http.post('/users', data);
  }

  deleteUsers(id:number) {
    return this.http.delete('/users/'+ id);
  }

  getUser(id:number){
    return this.http.get('/users/'+ id);
  }

  putUser(data:User, id:number){
    return this.http.put(`/users/${id}`, data);
  }
}
