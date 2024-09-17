import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ind-impacto',
  templateUrl: './ind-impacto.component.html',
  styleUrl: './ind-impacto.component.css'
})
export class IndImpactoComponent implements OnInit  {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      estrategia_programa: ['', [Validators.required, Validators.maxLength(100)]],
      ind_impacto: ['', [Validators.required, Validators.maxLength(200)]],
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
    }
  }
}
