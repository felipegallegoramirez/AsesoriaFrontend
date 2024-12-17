import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtprofesionalesService } from '../../services/atprofesionales.service';
import { ATProfesionales } from '../../models/atprofesionales';

@Component({
  selector: 'app-atprofesionales',
  templateUrl: './atprofesionales.component.html',
  styleUrl: './atprofesionales.component.css'
})
export class ATProfesionalesComponent {
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder, private atprofesionalesService: AtprofesionalesService) {
    this.form = this.fb.group({
      //id_programa: ['', [Validators.required]],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      areas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      tareas_profesionales: ['', [Validators.required, Validators.maxLength(255)]],
      poblaciones_actuacion: ['', [Validators.required, Validators.maxLength(255)]]
    });
  }

  ngOnInit() {
    let status = localStorage.getItem('statusCode')
    if(status != 'new'){
      let data = this.atprofesionalesService.read(Number(status))
      this.form.patchValue({
        areas_profesionales: data?.areas_profesionales,
        tareas_profesionales: data?.tareas_profesionales,
        poblaciones_actuacion:data?.poblaciones_actuacion,
      });
    }
  }

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      let data = new ATProfesionales()
      data.areas_profesionales = this.form.value.saber
      data.tareas_profesionales = this.form.value.saber_hacer
      data.poblaciones_actuacion = this.form.value.saber_ser
      let status = localStorage.getItem('statusCode')
      if(status != 'new'){
        this.atprofesionalesService.update(Number(status),data)
      }else{
        this.atprofesionalesService.create(data)
      }
      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }
}
