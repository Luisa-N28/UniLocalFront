import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { RegistrarReporteDTO } from '../dto/registrar-reporte-dto';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private publicoURL = "http://localhost:8080/api/reportes";
  constructor(private http: HttpClient) { }

  public generarReporte(reporteDTO: RegistrarReporteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/registrar-reporte`, reporteDTO);
  }

  public obtenerReporte(codigoReporte: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-reporte/${codigoReporte}`);
  }

  public listarReportes(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-reportes`);
  }
}
