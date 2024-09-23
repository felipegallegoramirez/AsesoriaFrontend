import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saber',
  templateUrl: './saber.component.html',
  styleUrl: './saber.component.css'
})
export class SaberComponent {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      //id_programa: ['', [Validators.required, Validators.maxLength(255)]],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      saber: ['', [Validators.required, Validators.maxLength(300)]],
      saber_hacer: ['', [Validators.required, Validators.maxLength(300)]],
      saber_ser: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }
}
