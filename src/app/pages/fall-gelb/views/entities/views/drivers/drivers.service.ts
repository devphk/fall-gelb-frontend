import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { DriverDataPost, DriverResponse, LoadingMessage } from '@shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  constructor(private http: HttpService) {}

  getDrivers(): Observable<DriverResponse[]> {
    return this.http.get('/drivers');
  }

  createDriver(data: DriverDataPost): Observable<DriverDataPost[]> {
    return this.http.post(
      '/drivers',
      data,
      undefined,
      true,
      LoadingMessage.CREATING_DRIVER
    );
  }

  deleteDrivers(id: number) {
    return this.http.delete(
      '/drivers/' + id,
      undefined,
      true,
      LoadingMessage.DELETING_DRIVER
    );
  }

  getDriver(id: number) {
    return this.http.get('/drivers/' + id);
  }

  editDriver(data: any, id: number) {
    return this.http.put(`/drivers/${id}`, data);
  }
}
