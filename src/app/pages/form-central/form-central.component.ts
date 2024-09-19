import { Component } from '@angular/core';

@Component({
  selector: 'app-form-central',
  templateUrl: './form-central.component.html',
  styleUrl: './form-central.component.css'
})
export class FormCentralComponent {
  currentDiv: string = 'div1';
  isSlidingOut: boolean = false;
  isSlidingIn: boolean = false;
  act:number=0;

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
}
