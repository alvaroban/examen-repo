import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, ListaComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  miForm = this.fb.group({
    nombre: ["", [Validators.required]],
    apellido: ["", [Validators.required]],
    dni: ["", [Validators.required]],
    telefono: ["", [Validators.required]],
    presencia: false
  })

  constructor (private fb: FormBuilder){

  }
 datos: any[] = []

 agregar(alumno: any){
  console.log("agregando")
  let miAlumno = alumno
  miAlumno.id =  window.crypto.randomUUID()
  this.datos.push(miAlumno)
  this.miForm.reset()
 }
}
