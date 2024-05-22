import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/mensaje-dto';
import { Observable } from 'rxjs';
import { RegistrarClienteDTO } from '../dto/registrar-cliente-dto';
import { SessionDTO } from '../dto/session-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authURL = "http://localhost:8080/api/auth";
  constructor(private http: HttpClient) { }

  public registrarCliente(cliente: RegistrarClienteDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/registrar-cliente`, cliente);
  }

  public loginCliente(loginDTO: SessionDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login-cliente`, loginDTO);
  }
}


