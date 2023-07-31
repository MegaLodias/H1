import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';
//Importe de las rutas
import { NavbarComponent } from './components/navbar/navbar.component';
import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidoComponent } from './components/protegido/protegido.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PreciosComponent, 
    HomeComponent,
    ProtegidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-xf2s1jkg5rqcs8t1.us.auth0.com',
      clientId: 'K5gnTNewrRiZ635qK0nXBfNLHcFVcBb6',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
