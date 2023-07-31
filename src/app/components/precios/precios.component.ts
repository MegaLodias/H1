import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrosService } from 'src/app/servicio/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent {
  registros:any[]=[];
  registrosEncontrados: any[] = [];
  nombreClienteBusqueda: string = '';

  ngOnInit(): void {
    this.registros = this._heroesService.getHeroes();
    console.log(this.registros);
    this.registrosEncontrados = this.registros;
    console.log(this.registros);
  }
  constructor(private _heroesService:RegistrosService, private router:Router){ }

  buscarRegistrosPorCliente() {
    if (this.nombreClienteBusqueda.trim() === '') {
      // Si el campo de búsqueda está vacío, muestra todos los registros
      this.registrosEncontrados = this.registros;
    } else {
      // Si el campo de búsqueda tiene un nombre, realiza la búsqueda por cliente
      this.registrosEncontrados = this.registros.filter(
        (reg) => reg.cliente.toLowerCase().includes(this.nombreClienteBusqueda.toLowerCase())
      );
    }
  }

  verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
   }
}
