import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VagregadoService } from '../../services/vagregado.service';
import { VAgregado } from '../../models/vagregado';

@Component({
  selector: 'app-vagregado',
  templateUrl: './vagregado.component.html',
  styleUrl: './vagregado.component.css'
})
export class VAgregadoComponent implements OnInit{
  form: FormGroup;
  programas: any[] = []; // Aquí deberías cargar los programas desde tu backend

  constructor(private fb: FormBuilder, private vagregadoService:VagregadoService ) {
    this.form = this.fb.group({
      //id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      v_agregado: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  ngOnInit() {
    let status = localStorage.getItem('statusCode')
    if(status != 'new'){
      let data = this.vagregadoService.read(Number(status))
      this.form.patchValue({
        v_agregado: data?.v_agregado,
      });
    }
  }

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      let data = new VAgregado()
      data.v_agregado = this.form.value.saber
      let status = localStorage.getItem('statusCode')
      if(status != 'new'){
        this.vagregadoService.update(Number(status),data)
      }else{
        this.vagregadoService.create(data)
      }
      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }
}
