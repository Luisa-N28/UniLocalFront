import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../service/token.service';
import { GuestHeaderComponent } from '../guest-header/guest-header.component';
import { NegocioPrivadoService } from '../../service/negocio-privado.service';


@Component({
  selector: 'app-my-business',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, GuestHeaderComponent, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './my-business.component.html',
  styleUrl: './my-business.component.css'
})
export class MyBusinessComponent {
  negociosArchivados: ItemNegocioDTO[];
  negocios: ItemNegocioDTO[];
  constructor(private negocioService: NegocioPrivadoService, private tokenService: TokenService) {
  this.negocios = [];
  this.negociosArchivados = [];
  this.listarNegocios();
  }
  public listarNegocios(){
    const codigoCliente = this.tokenService.getCodigo();
    console.log(codigoCliente);
    this.negocioService.listarNegocioPropietario(codigoCliente).subscribe({
    next: (data) => {
      console.log(
      data.respuesta
      );
    this.negocios = data.respuesta;
    },
    error: (error) => {
    console.error(error);
    }
    });
  }

  public deleteBusiness(id: string){
    this.negocioService.eliminarNegocio(id).subscribe({
      next: (data) => {
        console.log(data.respuesta);
        window.location.reload();
      },
      error: (error) => {
        console.error(error);
      }
    });
    
  }
  

}


