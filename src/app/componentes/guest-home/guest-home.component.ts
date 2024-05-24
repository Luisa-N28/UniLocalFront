import { Component } from '@angular/core';
import { GuestHeaderComponent } from '../guest-header/guest-header.component';
import { FooterComponent } from '../footer/footer.component';

import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';
import { MapaService } from '../../service/mapa.service';
import { NegocioPublicosService } from '../../service/negocio-publicos.service';
import { BuscarNegocioDTO } from '../../dto/buscar-negocio-dto';



@Component({
  selector: 'app-guest-home',
  standalone: true,
  imports: [GuestHeaderComponent, FooterComponent, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  templateUrl: './guest-home.component.html',
  styleUrl: './guest-home.component.css'
})
export class GuestHomeComponent {
  
  bussiness: ItemNegocioDTO []
  constructor(private mapaService: MapaService, private router:Router, private negocioService: NegocioPublicosService) {
    this.bussiness = [];

    this.negocioService.buscarNegocio(new BuscarNegocioDTO).subscribe({
      next: data => {
        console.log(data.respuesta);
        this.bussiness = data.respuesta;
        this.mapaService.pintarMarcadores(data.respuesta);
      },
      error: error => {
        console.log(error);
      }
    });



  }



  ngOnInit(): void {
    this.mapaService.crearMapa();
    
    }

  public iraBusqueda(valor:string){
    if(valor){
    this.router.navigate(["/buscar-negocio", valor]);
    }
  }

}
