import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { AuthService } from '@auth0/auth0-angular';
import { RegistrosService, Registro } from 'src/app/servicio/registros.service'; // Importa Registro
import { Router } from '@angular/router';

@Component({
  selector: 'app-protegido',
  templateUrl: './protegido.component.html',
  styleUrls: ['./protegido.component.css']
})
export class ProtegidoComponent implements OnInit { // Implementa OnInit

  registros: Registro[] = []; // Usa la interfaz Registro y declara el tipo de la variable

  constructor(
    public auth: AuthService, // Corrige la coma en esta línea
    private _heroesService: RegistrosService, // Corrige el orden de la coma
    private router: Router
  ) {}

  ngOnInit(): void { // Es 'ngOnInit', no 'ngInit'
    this.auth.user$.subscribe(perfil =>
      console.log(perfil));

    this.registros = this._heroesService.getHeroes();
    console.log(this.registros);
  }

  verHeroe(idx: number) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
