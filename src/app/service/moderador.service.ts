import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { AceptarNegociosDTO } from '../dto/aceptar-negocios-dto';
import { RechazarNegocioDTO } from '../dto/rechazar-negocio-dto';
import { RegistrarBloqueoDTO } from '../dto/registrar-bloqueo-dto';
import { RechazarComentarioDTO } from '../dto/rechazar-comentario-dto';
@Injectable({
  providedIn: 'root'
})
export class ModeradorService {
  private publicoURL = "http://localhost:8080/api/moderadores";
  constructor(private http: HttpClient) { }

  public aceptarPeticionNegocio(aceptarNegociosDTO: AceptarNegociosDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/aceptar-peticion-negocio`, aceptarNegociosDTO);
  }

  public rechazarPeticionNegocio(rechazarNegociosDTO: RechazarNegocioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/rechazar-peticion-negocio`, rechazarNegociosDTO);
  }

  public aceptarPeticionComentario(registrarBloqueoDTO: RegistrarBloqueoDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/aceptar-peticion-comentario`, registrarBloqueoDTO);
  }

  public rechazarPeticionComentario(rechazarComentarioDTO: RechazarComentarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/rechazar-peticion-comentario`, rechazarComentarioDTO);
  }

  public obtenerModerador(codigoModerador: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-moderador/${codigoModerador}`);
  }
}
