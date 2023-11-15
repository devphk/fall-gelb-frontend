import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import {
  UserRole,
  UserRolePost,
  UserRolesResponse,
} from '@shared/models/user-roles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRolesService {
  constructor(private http: HttpService) {}

  addUserRoles(
    userId: number,
    rolesId: UserRolePost
  ): Observable<UserRolesResponse[]> {
    return this.http.post(`/users/${userId}/roles/`, rolesId);
  }

  getUserRole(userId: number): Observable<UserRolesResponse[]> {
    return this.http.get(`/users/${userId}/roles/`);
  }
}
