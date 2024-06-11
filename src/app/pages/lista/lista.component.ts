import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {
  @Input() alumnoLista: any

  mostrar: boolean = true

  eliminar(alumno: any){
    //persona.splice(persona.indexOf(persona.id), 1)
    this.alumnoLista = []
    this.mostrar = false
  }

  presente(alumno: any){
    let miAlumno = alumno
    miAlumno.presencia = true
    console.log(miAlumno.values)
  }
}
