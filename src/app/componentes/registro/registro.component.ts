import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Router, RouterLink } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';
import { RegistrarClienteDTO } from '../../dto/registrar-cliente-dto';
import { NegocioPublicosService } from '../../service/negocio-publicos.service';
import { AuthService } from '../../service/auth.service';
import { ImagenService } from '../../service/imagen.service';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule, RouterLink, FormsModule, AlertaComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroClienteDTO: RegistrarClienteDTO;
  checkbox: boolean;
  alerta: Alerta;
  foto:any;
  constructor(private publicoService: NegocioPublicosService, private authService: AuthService, private imagenService: ImagenService, private router: Router) {
    this.alerta = new Alerta("", "");
    this.registroClienteDTO = new RegistrarClienteDTO();
    this.checkbox = false;
  }

  public registrarCliente() {

    if (this.registroClienteDTO.fotoPerfil != "") {
      this.authService.registrarCliente(this.registroClienteDTO).subscribe({
      next: (data) => {
        this.alerta = new Alerta(data.respuesta, "success");
        this.router.navigate(['/login']);
    },
      error: (error) => {
      this.alerta = new Alerta(error.error.respuesta, "danger");
    }
    });
    } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
    }

  }


  public checkboxChange() {
    this.checkbox = !this.checkbox;
  }

  public verifyCheckbox(): boolean {
    return this.checkbox;


  }
  public subirImagen() {
    if (this.foto != null) {
      const formData = new FormData();
      formData.append('file', this.foto);

      this.imagenService.subir(formData).subscribe({
        next: data => {
          this.registroClienteDTO.fotoPerfil = data.respuesta.url;
          this.alerta = new Alerta("Se ha subido la foto", "success");
      },
        error: error => {
          console.log(error.error);
          this.alerta = new Alerta(error.error, "danger");
      }
      });
    } else {
      this.alerta = new Alerta("Debe seleccionar una imagen y subirla", "danger");
    }
    }

  public getPhoto(event: any) {
    this.foto = event.target.files[0];
  }
}
