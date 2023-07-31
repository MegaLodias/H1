import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
 
  private registro: Registro[]=[
    {
      codigo:'1',
      fecha: "31-07-2023",
      cliente: "Derik Aranda",
      tipoInteraccion: "Celular",
      descripcion:"Casa"
    },
    {
      codigo: '2',
      fecha: "31-07-2023",
      cliente: "Jose Aranda",
      tipoInteraccion: "Celular",
      descripcion:"Casa"
    },
    {
      codigo: '3',
      fecha: "31-07-2023",
      cliente: "Duyar Aranda",
      tipoInteraccion: "Celular",
      descripcion:"Casa"
    }
   
  ];

  buscarPorCliente(cliente: string): Registro[] {
    return this.registro.filter(reg => reg.cliente === cliente);
  }

  getHeroes(){
  return this.registro;
  }

  getHeroe(idx: number){
    return this.registro[idx];
  }

  constructor() {
    console.log ("Servicio listo para usar...");
   }

   agregarHeroe(heroe: Registro): void {
    this.registro.push(heroe);
  }
    
}

export interface Registro {
  codigo: string; 
  fecha: string;
  cliente: string;
  tipoInteraccion: string;
  descripcion: string;
}


