import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrl: './competencias.component.css'
})
export class CompetenciasComponent implements OnInit {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      verbo: ['', [Validators.required, Validators.maxLength(25)]],
      objeto_conceptual: ['', [Validators.required, Validators.maxLength(255)]],
      finalidad: ['', [Validators.required, Validators.maxLength(255)]],
      condicion_contexto: ['', [Validators.required, Validators.maxLength(255)]],
      competencia: ['', [Validators.required, Validators.maxLength(600)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
