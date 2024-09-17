import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inst-medicion',
  templateUrl: './inst-medicion.component.html',
  styleUrl: './inst-medicion.component.css'
})
export class InstMedicionComponent implements OnInit {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      estrategia_programa: ['', [Validators.required, Validators.maxLength(100)]],
      inst_medicion: ['', [Validators.required, Validators.maxLength(200)]],
      id_programa: ['', [Validators.required]]
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
