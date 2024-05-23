import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { RegistrarComentarioDTO } from '../dto/registrar-comentario-dto';
import { ActualizarComentarioDTO } from '../dto/actualizar-comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private publicoURL = "http://localhost:8080/api/comentarios";
  constructor(private http: HttpClient) { }

  public crearComentario(registrarComentarioDTO: RegistrarComentarioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/crear-comentario`, registrarComentarioDTO);
  }

  public eliminarComentario(codigoComentario: string): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/eliminar-comentario/${codigoComentario}`, null);
  }

  public responderComentario(actualizarComentarioDTO: ActualizarComentarioDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/responder-comentario`, actualizarComentarioDTO);
  }

  public listarComentarios(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-comentarios/${codigoNegocio}`);
  }

  public obtenerComentario(codigoComentario: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-comentario/${codigoComentario}`);
  }

  public calcularPuntuacion(codigoNegocio: string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/calcular-puntuacion/${codigoNegocio}`);
  }
}
