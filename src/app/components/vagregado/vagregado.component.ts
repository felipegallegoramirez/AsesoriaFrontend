import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vagregado',
  templateUrl: './vagregado.component.html',
  styleUrl: './vagregado.component.css'
})
export class VAgregadoComponent implements OnInit{
  form: FormGroup;
  programas: any[] = []; // Aquí deberías cargar los programas desde tu backend

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      v_agregado: ['', [Validators.required, Validators.maxLength(500)]]
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
