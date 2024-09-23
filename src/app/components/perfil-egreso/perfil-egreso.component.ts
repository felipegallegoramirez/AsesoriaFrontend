import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil-egreso',
  templateUrl: './perfil-egreso.component.html',
  styleUrl: './perfil-egreso.component.css'
})
export class PerfilEgresoComponent  implements OnInit{
  programas: any[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      //id_programa: ['', [Validators.required, Validators.maxLength(255)]],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      nombre_programa: ['', [Validators.required, Validators.maxLength(100)]],
      nmodalidad: ['', [Validators.required, Validators.maxLength(30)]],
      perfil_profesional: ['', [Validators.required, Validators.maxLength(2500)]],
      perfil_ocupacional: ['', [Validators.required, Validators.maxLength(2500)]]
    });
  }

  ngOnInit(): void {}

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      this.esFormularioValido.emit(this.form.valid);
      console.log(this.form.value);
    } else {
      console.log('Formulario inválido');
      this.form.markAllAsTouched();
    }
  }
}
