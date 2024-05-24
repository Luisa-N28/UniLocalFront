import { Routes } from '@angular/router';
//import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginGuard } from './service/permiso.service';
import { RolesGuard } from './service/roles.service';
import { VistaNegocioComponent } from './componentes/vista-negocio/vista-negocio.component';
import { RegistrarNegocioComponent } from './componentes/registrar-negocio/registrar-negocio.component';
import { BuscarNegocioComponent } from './componentes/buscar-negocio/buscar-negocio.component';
import { VistaModeradorComponent } from './componentes/vista-moderador/vista-moderador.component';
import { VistaReportesComponent } from './componentes/vista-reportes/vista-reportes.component';
import { VistaFavoritosComponent } from './componentes/vista-favoritos/vista-favoritos.component';
import { MiPerfilComponent } from './componentes/mi-perfil/mi-perfil.component';
import { RecuperarContraseniaComponent } from './componentes/recuperar-contrasenia/recuperar-contrasenia.component';
import { MyBusinessComponent } from './componentes/my-business/my-business.component';
import { GuestHomeComponent } from './componentes/guest-home/guest-home.component';
import { LoginAdminComponent } from './componentes/login-admin/login-admin.component';

export const routes: Routes = [
    { path: '', component: GuestHomeComponent},
    { path: 'login', component: LoginComponent,canActivate: [LoginGuard] },
    { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
    { path: '**', redirectTo: '404' },
    { path: 'my-business', component: MyBusinessComponent, canActivate: [RolesGuard], data: { expectedRole: ['CLIENTE'] } },
    { path: 'vista-favoritos', component: VistaFavoritosComponent, canActivate: [RolesGuard], data: { expectedRole: ['CLIENTE'] } },
    { path: 'vista-negocio/:id', component: VistaNegocioComponent },
    { path: 'registrar-negocio', component: RegistrarNegocioComponent, canActivate: [RolesGuard], data: { expectedRole: ['CLIENTE'] } },
    { path: 'login-admin', component: LoginAdminComponent, canActivate: [LoginGuard] },
    { path: "buscar-negocio/:texto", component: BuscarNegocioComponent },
    { path: 'vista-moderador', component: VistaModeradorComponent, canActivate: [RolesGuard], data: { expectedRole: ['MODERADOR'] } },
    { path: 'vista-reporte', component: VistaReportesComponent, canActivate: [RolesGuard], data: { expectedRole: ['MODERADOR'] } },
    //{ path: 'business-view-admin/:id', component: BusinessViewAdminComponent, canActivate: [RolesGuard], data: { expectedRole: ['MODERADOR'] } },
    //{ path: 'denounce-view/:id', component: DenounceViewComponent, canActivate: [RolesGuard], data: { expectedRole: ['MODERADOR'] } },
    { path: 'mi-perfil', component: MiPerfilComponent, canActivate: [RolesGuard], data: { expectedRole: ['CLIENTE'] } },
    
    //{ path: 'denounce-business/:id', component: DenounceComponent, canActivate: [RolesGuard], data: { expectedRole: ['CLIENTE'] } },
    { path: 'recuperar-contrasenia/:id', component: RecuperarContraseniaComponent },
    //{ path: 'reset-password', component: ResetPasswordComponent },

];
