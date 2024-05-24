import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GuestHeaderComponent } from '../guest-header/guest-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from '../footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { Horario } from '../../dto/horario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Alerta } from '../../dto/alerta';
import { AlertaComponent } from '../alerta/alerta.component';
import { RegistrarNegocioDTO } from '../../dto/registrar-negocio-dto';
import { NegocioPrivadoService } from '../../service/negocio-privado.service';
import { MapaService } from '../../service/mapa.service';
import { TokenService } from '../../service/token.service';
import { ImagenService } from '../../service/imagen.service';

@Component({
  selector: 'app-registrar-negocio',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, GuestHeaderComponent, FooterComponent, MatSelectModule, FormsModule, CommonModule, RouterLink, MatIconModule, AlertaComponent],
  templateUrl: './registrar-negocio.component.html',
  styleUrl: './registrar-negocio.component.css'
})
export class RegistrarNegocioComponent {
  registroNegocioDTO: RegistrarNegocioDTO;
  //horarios: Horario[];
  telefonos: string[];
  fotos: any[];
  alerta:Alerta;
  constructor(private negociosService: NegocioPrivadoService, private mapaService: MapaService, private tokenService: TokenService, private imagenService: ImagenService, private router: Router) {
    this.alerta = new Alerta("", "");
    this.registroNegocioDTO = new RegistrarNegocioDTO();
    //this.horarios = [ new Horario() ];
    this.telefonos = [""];
    this.fotos = [];
  }
  public crearNegocio() {
    this.registroNegocioDTO.codigoUsuario = this.tokenService.getCodigo();
    //this.registroNegocioDTO.horarios = this.horarios;
    this.registroNegocioDTO.telefonos = this.telefonos;
    this.negociosService.crearNegocio(this.registroNegocioDTO).subscribe({
      next: data => {
        this.alerta = new Alerta(data.respuesta, "success");
        this.router.navigate(['/my-business']);
      },
      error: error => {
        console.log(error.error);
        this.alerta = new Alerta(error.error.respuesta, "danger");
      }
    
    });
    console.log(this.registroNegocioDTO);
  }
  public agregarHorario() {
    //this.horarios.push(new Horario());
  }

  public agregarTelefono() {
    this.telefonos.push("");
  }

  public subirImagen() {
    if (this.fotos != null && this.fotos.length > 0) {
      this.fotos.forEach(foto =>{
        const formData = new FormData();
        formData.append('file', foto);

        this.imagenService.subir(formData).subscribe({
          next: data => {
            console.log(data.respuesta.url);
            this.registroNegocioDTO.imagenes.push(data.respuesta.url);
            
      },
        error: error => {
          console.log(error.error);
          this.alerta = new Alerta(error.error, "danger");
      }
      });

      })
      this.alerta = new Alerta("Se han subido todas las imagenes", "success");
      
    } else {
      this.alerta = new Alerta("Debe seleccionar una imagen y subirla", "danger");
    }
    }

  public agregarImagenes(event:any){
  
    this.fotos.push(event.target.files[0]);

  }

  ngOnInit(): void {
    this.mapaService.crearMapa();
    this.mapaService.agregarMarcador().subscribe((marcador) => {
      this.registroNegocioDTO.ubicacion.latitud = marcador.lat;
      this.registroNegocioDTO.ubicacion.longitud = marcador.lng;
    });
  }
}
