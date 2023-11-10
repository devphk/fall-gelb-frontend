import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpUtilsService } from '@core/services';
import { HttpService } from '@core/services/http.service';
import { ModuleAction } from '@shared/models/module-action';
import { RolePermissionAdded, RoleResponse } from '@shared/models/role';
import { SelectOption } from '@shared/models/select-option';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private http: HttpService,
              private httpUtils: HttpUtilsService) {}

  addRolePermissions(
    modulePermission: any,
    roleId: any
  ): Observable<RolePermissionAdded[]> {
    return this.http.post(`/roles/${roleId}/permissions/`, modulePermission);
  }

  getRoles(): Observable<RoleResponse[]> {
    return this.http.get('/roles');
  }

  getModules(): Observable<SelectOption> {
    return this.http.get('/modules');
  }

  getModuleActions(
    moduleId: number,
    roleId?: number
  ): Observable<ModuleAction> {

    const params = {
      role_id: roleId
    }

    return this.http
               .get(`/modules/${moduleId}`, 
                    roleId ? this.httpUtils.getHttpParams(params) : undefined);

  }

  createRole(roleName: any): Observable<RoleResponse> {
    const body = {
      name: roleName,
    };
    return this.http.post('/roles', body);
  }

  editRole(roleName: any, roleId: number): Observable<RoleResponse> {
    const body = {
      name: roleName,
    };
    return this.http.put(`/roles/${roleId}`, body);
  }

  deleteRole(roleId: number): Observable<RoleResponse> {
    return this.http.delete(`/roles/${roleId}`);
  }
}
