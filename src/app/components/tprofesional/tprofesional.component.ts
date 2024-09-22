import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tprofesional',
  templateUrl: './tprofesional.component.html',
  styleUrl: './tprofesional.component.css'
})
export class TProfesionalComponent implements OnInit {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      t_profesional: ['', [Validators.required, Validators.maxLength(300)]]
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
