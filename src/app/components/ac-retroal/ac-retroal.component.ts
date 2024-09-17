import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ac-retroal',
  templateUrl: './ac-retroal.component.html',
  styleUrl: './ac-retroal.component.css'
})
export class AcRetroalComponent  implements OnInit {
  form: FormGroup;
  programas: any[] = []; // Aquí deberías cargar los programas disponibles

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      estrategia_programa: ['', [Validators.required, Validators.maxLength(100)]],
      ac_retrioal: ['', [Validators.required, Validators.maxLength(200)]],
      id_programa: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Aquí deberías cargar los programas disponibles
    // this.programas = [{ id: 1, nombre: 'Programa 1' }, { id: 2, nombre: 'Programa 2' }];
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
