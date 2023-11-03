import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculoDto } from './VehiculoDto';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo1.json';

constructor(private http: HttpClient) { }


getVehiculos(): Observable<VehiculoDto[]> {
  return this.http.get<VehiculoDto[]>(this.apiUrl);
}
}
