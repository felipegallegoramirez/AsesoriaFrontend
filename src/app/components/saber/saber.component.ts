import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaberService } from '../../services/saber.service';
import { Saber } from '../../models/saber';

@Component({
  selector: 'app-saber',
  templateUrl: './saber.component.html',
  styleUrl: './saber.component.css'
})
export class SaberComponent implements OnInit{
  form: FormGroup;
  programas: any[] = [];

  constructor(private fb: FormBuilder, private saberService: SaberService) {
    this.form = this.fb.group({
      //id_programa: ['', [Validators.required, Validators.maxLength(255)]],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      saber: ['', [Validators.required, Validators.maxLength(300)]],
      saber_hacer: ['', [Validators.required, Validators.maxLength(300)]],
      saber_ser: ['', [Validators.required, Validators.maxLength(300)]]
    });
  }
  ngOnInit(): void {
    let status = localStorage.getItem('statusCode')
    console.log(status)
    if(status != 'new'){
      let data = this.saberService.read(Number(status))
      this.form.patchValue({
        saber: data?.saber,
        saber_hacer: data?.saber_hacer,
        saber_ser:data?.saber_ser,
      });
    }

  }


  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      let data = new Saber()
      data.saber = this.form.value.saber
      data.saber_hacer = this.form.value.saber_hacer
      data.saber_ser = this.form.value.saber_ser
      let status = localStorage.getItem('statusCode')
      if(status != 'new'){
        this.saberService.update(Number(status),data)
      }else{
        this.saberService.create(data)
      }

      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }
}
