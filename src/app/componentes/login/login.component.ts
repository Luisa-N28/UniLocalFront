import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionDTO } from '../../dto/session-dto';

import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';
import { Alerta } from '../../dto/alerta';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RegistroComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  sessionDTO: SessionDTO;
  alerta:Alerta

  constructor(private authService: AuthService, private tokenService: TokenService, private router:Router) {
    this.alerta = new Alerta("", "");
    this.sessionDTO = new SessionDTO();
    
  }

  public login() {
    this.authService.loginCliente(this.sessionDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
      this.alerta = new Alerta(error.error.respuesta, "danger" );
      }
      });
  }

  public registro(){
    this.router.navigate(["/registro"]);
  }
}
