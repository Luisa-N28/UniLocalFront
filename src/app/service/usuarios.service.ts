import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { HttpClient } from '@angular/common/http';
import { RegistrarClienteDTO } from '../dto/registrar-cliente-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private publicoURL = "http://localhost:8080/api/usuarios";
  constructor(private http: HttpClient) { }

  public registrarse(registroClienteDTO: RegistrarClienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publicoURL}/registrar-cliente`, registroClienteDTO);
  }
}
