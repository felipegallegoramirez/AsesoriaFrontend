import { Component } from '@angular/core';

@Component({
  selector: 'app-form-central',
  templateUrl: './form-central.component.html',
  styleUrl: './form-central.component.css'
})
export class FormCentralComponent{
  currentDiv: string = 'div1';
  isSlidingOut: boolean = false;
  isSlidingIn: boolean = false;
  isReturnIn: boolean = false;
  isReturnOut: boolean = false;
  act:number=0;

  constructor() {

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

  morediv(n:number) {
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
      this.morediv(2)
    }
  }

  form2(esValido: boolean) {
    if(esValido){
      this.morediv(4)
    }
  }

  form3(esValido: boolean) {
    if(esValido){
      this.morediv(5)
    }
  }

  form4(esValido: boolean) {
    if(esValido){
      this.morediv(6)
    }
  }

  form5(esValido: boolean) {
    if(esValido){
      this.morediv(7)
    }
  }

  form6(esValido: boolean) {
    if(esValido){
      this.morediv(2)
    }
  }


}
