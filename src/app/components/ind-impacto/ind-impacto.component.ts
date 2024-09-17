import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ind-impacto',
  templateUrl: './ind-impacto.component.html',
  styleUrl: './ind-impacto.component.css'
})
export class IndImpactoComponent implements OnInit  {
  form: FormGroup;
  programas: any[] = []; // Aquí deberías cargar los programas disponibles

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      estrategia_programa: ['', [Validators.required, Validators.maxLength(100)]],
      ind_impacto: ['', [Validators.required, Validators.maxLength(200)]],
      id_programa: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    // Aquí deberías cargar los programas disponibles
    // this.programas = [{ id: 1, nombre: 'Programa 1' }, { id: 2, nombre: 'Programa 2' }];
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Aquí iría la lógica para enviar los datos al servidor
    } else {
      console.log('Formulario inválido');
    }
  }
}
