import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atprofesionales',
  templateUrl: './atprofesionales.component.html',
  styleUrl: './atprofesionales.component.css'
})
export class ATProfesionalesComponent {
  form: FormGroup;
  programas: any[] = []; // Aquí deberías cargar los programas disponibles

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', [Validators.required]],
      id: ['', [Validators.required, Validators.maxLength(50)]],
      areas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      tareas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      poblaciones_actuacion: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit() {
    // Aquí deberías cargar los programas disponibles
    // this.loadProgramas();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Aquí puedes enviar los datos al servidor
    } else {
      console.log('Formulario inválido');
    }
  }
}
