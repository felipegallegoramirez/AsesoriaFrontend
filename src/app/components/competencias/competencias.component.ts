import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CompetenciasService } from '../../services/competencias.service';
import { Competencias } from '../../models/competencias';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.component.html',
  styleUrl: './competencias.component.css'
})
export class CompetenciasComponent implements OnInit {
  form: FormGroup;
  programas: any[] = [];
  suggestions: string[] = [
    'Actualizar','Administrar','Asegurar','Asesorar','Auditar','Comunicar','Conducir','Conocer','Coordinar','Definir','Desarrollar','Dirigir','Diseñar','Dominar','Establecer','Evaluar','Fiscalizar','Formular','Generar','Gestionar','Hacer','Implementar','Liderar','Modelar','Participar','Planear','Presidir','Producir','Resolver','Sistematizar','Supervisar','Transformar','Validar','Verificar'];
  filteredSuggestions: string[] = [];
  showSuggestions = false;

  constructor(private fb: FormBuilder, private competenciasService:CompetenciasService) {
    this.form = this.fb.group({
      //id_programa: ['', Validators.required],
      //id: ['', [Validators.required, Validators.maxLength(50)]],
      verbo: ['', [Validators.required, Validators.maxLength(25), this.containVerb()]],
      objeto_conceptual: [{value:'',disabled:true}, [Validators.required, Validators.maxLength(255)]],
      finalidad: [{value:'',disabled:true}, [Validators.required, Validators.maxLength(255)]],
      condicion_contexto: [{value:'',disabled:true}, [Validators.required, Validators.maxLength(255)]],
      competencia: ['', [Validators.required, Validators.maxLength(600),this.containInfo()]]
    });
  }

  containVerb() {
    return (control: AbstractControl): ValidationErrors | null => {
      if(this.suggestions.findIndex(x=>x==control.value)==-1){
        return { contain: true };
      }
      return null;
    };
  }

  containInfo() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!this.form) return null;
      console.log(this.form.get('verbo')?.value)
      const verbo = this.form.get('verbo')?.value.toLowerCase() || '';
      const objeto_conceptual = this.form.get('objeto_conceptual')?.value.toLowerCase() || '';
      const finalidad = this.form.get('finalidad')?.value.toLowerCase() || '';
      const condicion_contexto = this.form.get('condicion_contexto')?.value.toLowerCase() || '';
      const competencia = control.value?.toLowerCase() || '';
      if(
        competencia.toLowerCase().includes(verbo) &&
        competencia.toLowerCase().includes(objeto_conceptual) && 
        competencia.toLowerCase().includes(finalidad) && 
        competencia.toLowerCase().includes(condicion_contexto)
      ){
        return null;

      }
      return { contain: true };
    };
  }

  containInfoFinal(){
    if (!this.form) return null;
    console.log(this.form.get('verbo')?.value)
    const verbo = this.form.get('verbo')?.value.toLowerCase() || '';
    const objeto_conceptual = this.form.get('objeto_conceptual')?.value.toLowerCase() || '';
    const finalidad = this.form.get('finalidad')?.value.toLowerCase() || '';
    const condicion_contexto = this.form.get('condicion_contexto')?.value.toLowerCase() || '';
    const competencia = this.form.get('competencia')?.value.toLowerCase() || '';
    if(
      competencia.toLowerCase().includes(verbo) &&
      competencia.toLowerCase().includes(objeto_conceptual) && 
      competencia.toLowerCase().includes(finalidad) && 
      competencia.toLowerCase().includes(condicion_contexto)
    ){
      return true;
    }
    return false;
  }


  ngOnInit() {
    let status = localStorage.getItem('statusCode')
    let data = this.competenciasService.read(Number(status))

    this.form.patchValue({
      verbo: data?.verbo,
      objeto_conceptual: data?.objeto_conceptual,
      finalidad: data?.finalidad,
      condicion_contexto:data?.condicion_contexto,
      competencia:data?.competencia,
    });
  }



  filterSuggestions() {
    const filterValue = this.form.value.verbo.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(filterValue)
    );
  }

  selectSuggestion(suggestion: string) {
    this.form.get('verbo')?.setValue(suggestion);
    this.showSuggestions = false;
  }

  onFocus() {
    this.showSuggestions = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
  }


  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if(this.containInfoFinal()){
      this.form.get('objeto_conceptual')?.enable();
      this.form.get('finalidad')?.enable();
      this.form.get('condicion_contexto')?.enable();
      if (this.form.valid) {
        let data = new Competencias()
        data.verbo = this.form.value.verbo
        data.objeto_conceptual = this.form.value.objeto_conceptual
        data.finalidad = this.form.value.finalidad
        data.condicion_contexto = this.form.value.condicion_contexto
        data.competencia = this.form.value.competencia
        data.id_programa = ''
        let status = localStorage.getItem('statusCode')
        this.competenciasService.update(Number(status),data)
        this.esFormularioValido.emit(this.form.valid);
      } else {
        console.log('Formulario inválido');
      }
    }else{
      alert('Recuerde utilizar todos los elementos')
    }

  }
}
