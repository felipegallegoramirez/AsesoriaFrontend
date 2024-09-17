import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saber',
  templateUrl: './saber.component.html',
  styleUrl: './saber.component.css'
})
export class SaberComponent {
  form: FormGroup;
  programas: any[] = [
    { id: '1', nombre: 'Programa 1' },
    { id: '2', nombre: 'Programa 2' },
    { id: '3', nombre: 'Programa 3' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', [Validators.required, Validators.maxLength(255)]],
      id: ['', [Validators.required, Validators.maxLength(50)]],
      saber: ['', [Validators.required, Validators.maxLength(300)]],
      saber_hacer: ['', [Validators.required, Validators.maxLength(300)]],
      saber_ser: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
