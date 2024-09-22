import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-atprofesionales',
  templateUrl: './atprofesionales.component.html',
  styleUrl: './atprofesionales.component.css'
})
export class ATProfesionalesComponent {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', [Validators.required]],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      areas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      tareas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      poblaciones_actuacion: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
