import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';
  mensajeEnviado: boolean = false;

  enviarFormulario() {
    if (this.nombre && this.email && this.mensaje) {
      console.log('Formulario enviado:', {
        nombre: this.nombre,
        email: this.email,
        mensaje: this.mensaje
      });

      this.mensajeEnviado = true;

      // Limpiar el formulario después de unos segundos
      setTimeout(() => {
        this.mensajeEnviado = false;
        this.nombre = '';
        this.email = '';
        this.mensaje = '';
      }, 3000);
    }
  }
}
