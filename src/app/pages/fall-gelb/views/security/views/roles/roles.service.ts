import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModuleAction } from '@shared/models/module-action';
import { Permission } from '@shared/models/permission';
import { Role } from '@shared/models/role';
import { SelectOption } from '@shared/models/select-option';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private baseRouteRoles = `${environment.urlBase}/roles`;
  private baseRouteModules = `${environment.urlBase}/modules`;

  constructor(private http: HttpClient) {}

  postRolPermissions(
    data: Permission,
    roleId: number
  ): Observable<Permission[]> {
    return this.http.post<Permission[]>(
      `${this.baseRouteRoles}/${roleId}/permissions/`,
      data
    );
  }
  getRoles(): Observable<Role> {
    return this.http.get<Role>(this.baseRouteRoles);
  }

  getModules(): Observable<SelectOption> {
    return this.http.get<SelectOption>(this.baseRouteModules);
  }

  getModuleActions(role_id: number): Observable<ModuleAction> {
    return this.http.get<ModuleAction>(`${this.baseRouteModules}/${role_id}`);
  }

  postRol(data: Role): Observable<Role> {
    return this.http.post<Role>(this.baseRouteRoles, data);
  }
}
