import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-est-mesocurricular',
  templateUrl: './est-mesocurricular.component.html',
  styleUrl: './est-mesocurricular.component.css'
})
export class EstMesocurricularComponent implements OnInit {
  form: FormGroup;
  estrategias: string[] = ['Estrategia 1', 'Estrategia 2', 'Estrategia 3'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      estrategia_programa: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.maxLength(600)]]
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
