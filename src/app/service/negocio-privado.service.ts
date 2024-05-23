import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { RegistrarNegocioDTO } from '../dto/registrar-negocio-dto';
import { ActualizarNegocioDTO } from '../dto/actualizar-negocio-dto';
import { UbicacionActualDTO } from '../dto/ubicacion-actual-dto';
import { PopularidadDTO } from '../dto/popularidad-dto';

@Injectable({
  providedIn: 'root'
})
export class NegocioPrivadoService {

  private publicoURL = "http://localhost:8080/api/negocios-privados";
  constructor(private http: HttpClient) { }

  public crearNegocio(registroNegocioDTO: RegistrarNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/crear-negocio`, registroNegocioDTO);
  }

  public actualizarNegocio(actualizarNegocioDTO: ActualizarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/actualizar-negocio`, actualizarNegocioDTO);
  }

  public eliminarNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/eliminar-negocio/${codigoNegocio}`, codigoNegocio);
  }

  public recomendarLugares(ubicacionActualDTO: UbicacionActualDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/recomendar-lugares`, ubicacionActualDTO);
  }

  public obtenerNegocio(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-negocio/${codigoNegocio}`);
  }

  public listarNegocioPropietario(codigoCliente: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-negocios-propietario/${codigoCliente}`);
  }

  public listarPeticiones(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-peticiones`);
  }

  public listarNegociosFavoritos(ubicacionActualDTO: UbicacionActualDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/listar-negocios-favoritos`, ubicacionActualDTO);
  }

  public agregarPuntuacion(popularidadDTO: PopularidadDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/agregar-puntuacion`, popularidadDTO);
  }
}
