import { Component } from '@angular/core';
import { Alerta } from '../../dto/alerta';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SessionDTO } from '../../dto/session-dto';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, RouterOutlet, RouterLink, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {
  sessionDTO: SessionDTO;
  alerta:Alerta
  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.alerta = new Alerta("", "");
    this.sessionDTO = new SessionDTO();
    
  }

  public login() {
    this.authService.loginModerador(this.sessionDTO).subscribe({
      next: data => {
        this.tokenService.loginModerador(data.respuesta.token);
      },
      error: error => {
      this.alerta = new Alerta(error.error.respuesta, "danger" );
      }
      });
  }

}
