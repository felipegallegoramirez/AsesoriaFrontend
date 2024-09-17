import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aprofesional',
  templateUrl: './aprofesional.component.html',
  styleUrl: './aprofesional.component.css'
})
export class AProfesionalComponent implements OnInit{
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', Validators.required],
      id: ['', [Validators.required, Validators.maxLength(50)]],
      a_profesional: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  ngOnInit() {
    // Aquí deberías cargar los programas desde tu servicio
    this.programas = [
      { id: '1', nombre: 'Programa 1' },
      { id: '2', nombre: 'Programa 2' },
      // ... más programas
    ];
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Aquí deberías enviar los datos a tu servicio
    } else {
      console.log('Formulario inválido');
    }
  }
}
