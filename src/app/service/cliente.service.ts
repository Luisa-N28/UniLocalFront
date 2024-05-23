import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { ActualizarClienteDTO } from '../dto/actualizar-cliente-dto';
import { ClienteNegocioDTO } from '../dto/cliente-negocio-dto';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private publicoURL = "http://localhost:8080/api/clientes";
  constructor(private http: HttpClient) { }


  public actualizarPerfil(actualizarCliente :ActualizarClienteDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/actualizar-perfil`, actualizarCliente);
  }

  public obtenerCliente(id: String): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.publicoURL}/obtener-cliente/${id}`);
  }

  public eliminarCliente(id: String): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.publicoURL}/eliminar-perfil/${id}`, id);
  }

  public guardarFavorito(clienteNegocioDTO :ClienteNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/guardar-favorito`, clienteNegocioDTO);
  }

  public quitarFavorito(clienteNegocioDTO: ClienteNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/quitar-favorito`, clienteNegocioDTO);
  }

  public guardarHistorial(clienteNegocioDTO: ClienteNegocioDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/guardar-historial`, clienteNegocioDTO);
  }
  


}