import { Component, OnInit } from '@angular/core';

import { SaberService } from '../../services/saber.service';
import { AtprofesionalesService } from '../../services/atprofesionales.service';
import { VagregadoService } from '../../services/vagregado.service';
import { CompetenciasService } from '../../services/competencias.service';
import { ResAprendizajeService } from '../../services/res-aprendizaje.service';
import { PerfilEgresoService } from '../../services/perfil-egreso.service';


import { Saber } from '../../models/saber';
import { ATProfesionales } from '../../models/atprofesionales';
import { VAgregado } from '../../models/vagregado';
import { Competencias } from '../../models/competencias';
import { ResAprendizaje } from '../../models/res-aprendizaje';
import { PerfilEgreso } from '../../models/perfil-egreso';








@Component({
  selector: 'app-form-central',
  templateUrl: './form-central.component.html',
  styleUrl: './form-central.component.css'
})
export class FormCentralComponent implements OnInit{
  currentDiv: string = 'div1';
  isSlidingOut: boolean = false;
  isSlidingIn: boolean = false;
  isReturnIn: boolean = false;
  isReturnOut: boolean = false;
  act:number=0;

  processActual:number=0;
  elementActual:number=0;

  saberS: Saber[] = [] 
  competenciaS: Competencias[] = []
  resApren: ResAprendizaje[] = []

  constructor(
    private saberService: SaberService,
    private competenciasService: CompetenciasService,
    private resAprendizajeService: ResAprendizajeService,
    private atprofesionalesService: AtprofesionalesService,
    private vagregadoService: VagregadoService,
    private perfilEgresoService: PerfilEgresoService
  ) {

  }

  ngOnInit(): void {
    this.saberS = this.saberService.getAll()
  }

  change(form:number){
    this.act=form;
    this.toggleDiv()
  }


  toggleDiv() {
    this.isSlidingOut = true;
    setTimeout(() => {
      this.currentDiv = this.currentDiv === 'div1' ? 'div2' : 'div1';
      this.isSlidingOut = false;
      this.isSlidingIn = true;

      setTimeout(() => {
        this.isSlidingIn = false;
      }, 100); // Tiempo de la animación de entrada
    }, 400); // Tiempo de la animación de salida
  }
  standar(){
    this.isSlidingOut = false;
    this.isSlidingIn = false;
    this.isReturnIn = false;
    this.isReturnOut = false;
  }

  morediv(n:number,state:string) {
    localStorage.setItem('statusCode',state)
    this.standar()
    this.isSlidingOut = true;
    setTimeout(() => {
      this.currentDiv = 'div'+n;
      this.isSlidingOut = false;
      this.isSlidingIn = true;

      setTimeout(() => {
        this.isSlidingIn = false;
      }, 100); // Tiempo de la animación de entrada
    }, 400); // Tiempo de la animación de salida
  }

  return(n:number) {
    this.standar()
    this.isReturnOut = true;
    setTimeout(() => {
      this.currentDiv = 'div'+n;
      this.isReturnOut = false;
      this.isReturnIn = true;

      setTimeout(() => {
        this.isReturnIn = false;
      }, 100); // Tiempo de la animación de entrada
    }, 400); // Tiempo de la animación de salida
  }

  form1(esValido: boolean) {
    if(esValido){
      this.morediv(2,'new')
    }
  }

  form2(esValido: boolean) {
    if(esValido){
      this.morediv(4,'new')
    }
  }

  form3(esValido: boolean) {
    if(esValido){
      this.morediv(5,'new')
    }
  }

  form4(esValido: boolean) {
    if(esValido){
      this.morediv(2,'new')
      this.saberS = this.saberService.getAll()
    }
  }

  form5(esValido: boolean) {
    if(esValido){
      this.morediv(6,'new')
      this.competenciaS = this.competenciasService.getAll()
    }
  }

  form6(esValido: boolean) {
    if(esValido){
      this.morediv(2,'new')
      this.resApren = this.resAprendizajeService.getAll()
    }
  }

  deletesaber(pos: number){
    this.saberService.delete(pos)
    this.atprofesionalesService.delete(pos)
    this.vagregadoService.delete(pos)

    this.competenciasService.delete(pos)

    this.resAprendizajeService.delete(pos)
    this.resAprendizajeService.delete(pos)
    this.resAprendizajeService.delete(pos)

    this.saberS = this.saberService.getAll()
  }

  nextEt(){
    let data = this.saberService.getAll()
    this.competenciasService.deleteAll()
    this.resAprendizajeService.deleteAll()
    console.log(data)

    for(let i = 0 ; i < data.length ; i++){
  console.log(i )

      let competencias = new Competencias()
      competencias.objeto_conceptual=data[i].saber_hacer
      competencias.finalidad=data[i].saber_hacer
      competencias.condicion_contexto=data[i].saber_ser
      competencias.id_programa = '(Verificar)'
      this.competenciasService.create(competencias)

      let resAprendizaje = new ResAprendizaje()
      resAprendizaje.tipo_saber='Saber'
      resAprendizaje.saber_asociado=data[i].saber
      resAprendizaje.id_resultado= '(Verificar)'
      this.resAprendizajeService.create(resAprendizaje)

      resAprendizaje = new ResAprendizaje()
      resAprendizaje.tipo_saber='Saberhacer'
      resAprendizaje.saber_asociado=data[i].saber_hacer
      resAprendizaje.id_resultado= '(Verificar)'
      this.resAprendizajeService.create(resAprendizaje)

      resAprendizaje = new ResAprendizaje()
      resAprendizaje.tipo_saber='Saberser'
      resAprendizaje.saber_asociado=data[i].saber_ser
      resAprendizaje.id_resultado= '(Verificar)'
      this.resAprendizajeService.create(resAprendizaje)

    }
    this.competenciaS = this.competenciasService.getAll()
    this.resApren = this.resAprendizajeService.getAll()
    this.morediv(6,'new')
  }

  competencia(){
    let pas = true
    let data = this.competenciasService.getAll()
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id_programa == '(Verificar)' ){
        pas = false
        break
      }
      
    }
    if(pas){
      this.morediv(8,'new')
    }else{
      alert('Recuerde completar los campos')
    }

  }

  finalizar(){
    let pas = true
    let data = this.resAprendizajeService.getAll()
    for(let i = 0 ; i < data.length ; i++){
      if(data[i].id_resultado == '(Verificar)' ){
        pas = false
        break
      }
    }
    if(pas){
      let perfil = this.perfilEgresoService.getAll()
      let saber = this.saberService.getAll()
      let atprofesional = this.atprofesionalesService.getAll()
      let vagregado = this.vagregadoService.getAll()
      let competencias = this.competenciasService.getAll()
      let resAprendizaje = this.resAprendizajeService.getAll()

      this.perfilEgresoService.createbd(perfil[0]).subscribe(res=>{})

      for(let i = 0 ; i < saber.length ; i++){
        this.saberService.createbd(saber[i]).subscribe(res=>{})
      }

      for(let i = 0 ; i < atprofesional.length ; i++){
        this.atprofesionalesService.createbd(atprofesional[i]).subscribe(res=>{})
      }
      for(let i = 0 ; i < vagregado.length ; i++){
        this.vagregadoService.createbd(vagregado[i]).subscribe(res=>{})
      }
      for(let i = 0 ; i < competencias.length ; i++){
        this.competenciasService.createbd(competencias[i]).subscribe(res=>{})
      }
      for(let i = 0 ; i < resAprendizaje.length ; i++){
        this.resAprendizajeService.createbd(resAprendizaje[i]).subscribe(res=>{})
      }




    }else{
      alert('Recuerde completar los campos')
    }
  }


}
