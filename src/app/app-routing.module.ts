import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'invitado', component: PreciosComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'admin', component: ProtegidoComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
