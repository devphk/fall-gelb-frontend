import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { ModuleAction } from '@shared/models/module-action';
import { RolePermissionAdded, RoleResponse } from '@shared/models/role';
import { SelectOption } from '@shared/models/select-option';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {

  constructor(private http: HttpService) {}

  addRolePermissions(
    modulePermission: any,
    roleId: any
  ): Observable<RolePermissionAdded[]> {

    return this.http.post(
      `/roles/${roleId}/permissions/`,
      modulePermission
    );
  }
  
  getRoles(): Observable<RoleResponse[]> {
    return this.http.get('/roles');
  }

  getModules(): Observable<SelectOption> {
    return this.http.get('/modules');
  }

  getModuleActions(role_id: number): Observable<ModuleAction> {
    return this.http.get(`/modules/${role_id}`);
  }

  createRole(roleName: any): Observable<RoleResponse> {
    const body = {
      name: roleName
    }
    return this.http.post('/roles', body);
  }
}
