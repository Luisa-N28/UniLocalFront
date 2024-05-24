import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { TokenService } from './service/token.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title ="unilocalUI"
  isLogged = false;
  email: string = "";
constructor(private tokenService: TokenService) { }
  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  if (this.isLogged) {
    this.email = this.tokenService.getEmail();
  }

  }
  public logout() {
    this.tokenService.logout();
  }
}
