import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-res-aprendizaje',
  templateUrl: './res-aprendizaje.component.html',
  styleUrl: './res-aprendizaje.component.css'
})
export class ResAprendizajeComponent {
  form: FormGroup;
  programas: any[] = [];
  resultados: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_restultado: ['', [Validators.required, Validators.maxLength(50)]],
      competencia: ['', [Validators.required, Validators.maxLength(600)]],
      tipo_saber: ['', [Validators.required, Validators.maxLength(10)]],
      saber_asociado: ['', [Validators.required, Validators.maxLength(255)]],
      taxonomia: ['', [Validators.required, Validators.maxLength(10)]],
      dominio_tratar: ['', [Validators.required, Validators.maxLength(20)]],
      nivel_dominio: ['', [Validators.required, Validators.maxLength(20)]],
      verbo: ['', [Validators.required, Validators.maxLength(20)]],
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      id_programa: ['', Validators.required]
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
