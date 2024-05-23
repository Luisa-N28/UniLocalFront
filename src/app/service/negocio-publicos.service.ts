import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { ItemNegocioDTO } from '../dto/item-negocio-dto';
import { BuscarNegocioDTO } from '../dto/buscar-negocio-dto';

@Injectable({
  providedIn: 'root'
})
export class NegocioPublicosService {

  private publicoURL = "http://localhost:8080/api/negocios-publicos";
  constructor(private http: HttpClient) { }

  public ordenarUbicacion(ubicacion: Ubicacion, listaNegocios: ItemNegocioDTO[]): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/ordenar-ubicacion`, { ubicacion, listaNegocios });
  }

  public ordenarPuntuacion(listaNegocios: ItemNegocioDTO[]): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/ordenar-popularidad`, listaNegocios);
  }

  public obtenerNegocioActivo(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-negocio-activo/${codigoNegocio}`);
  }

  public buscarNegocio(buscarNegocioDTO: BuscarNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/buscar-negocio`, buscarNegocioDTO);
  }

  public verificarAbierto(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/verificar-abierto/${codigoNegocio}`);
  }

  public finalizarTiempoEspera(): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/finalizar-tiempo-espera`, null);
  }
}
