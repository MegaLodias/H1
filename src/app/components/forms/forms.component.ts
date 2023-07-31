import { Component } from '@angular/core';
import { RegistrosService, Registro} from 'src/app/servicio/registros.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  nuevoHeroe: Registro = {
    codigo: '',
    fecha: '',
    cliente: '',
    tipoInteraccion: '',
    descripcion: ''
  };



  ngOnInit(): void {
  }
  constructor(private heroesService: RegistrosService) { }


  
  agregarHeroe(): void {
    if (this.validarCampos()) {
      this.heroesService.agregarHeroe(this.nuevoHeroe);
      this.resetFormulario();
      alert('Héroe agregado correctamente');
    } else {
      alert('Por favor, complete todos los campos');
    }
  }

  validarCampos(): boolean {
    return (
      this.nuevoHeroe.cliente.trim() !== '' &&
      this.nuevoHeroe.fecha.trim() !== '' &&
      this.nuevoHeroe.descripcion.trim() !== '' &&
      this.nuevoHeroe.codigo.trim() !== '' &&
      this.nuevoHeroe.tipoInteraccion.trim() !== ''
    );
  }


  resetFormulario(): void {
    this.nuevoHeroe = {
      codigo: '',
      fecha: '',
      cliente: '',
      tipoInteraccion: '',
      descripcion: ''
    };
  }
}
