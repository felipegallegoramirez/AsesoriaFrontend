import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-res-aprendizaje',
  templateUrl: './res-aprendizaje.component.html',
  styleUrl: './res-aprendizaje.component.css'
})
export class ResAprendizajeComponent {
  form: FormGroup;
  programas: any[] = [];
  resultados: any[] = [];
  suggestions: string[] = [
    'Actualizar','Administrar','Asegurar','Asesorar','Auditar','Comunicar','Conducir','Conocer','Coordinar','Definir','Desarrollar','Dirigir','Diseñar','Dominar','Establecer','Evaluar','Fiscalizar','Formular','Generar','Gestionar','Hacer','Implementar','Liderar','Modelar','Participar','Planear','Presidir','Producir','Resolver','Sistematizar','Supervisar','Transformar','Validar','Verificar'];
  filteredSuggestions: string[] = [];
  showSuggestions = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
//      id_restultado: ['', [Validators.required, Validators.maxLength(50)]],
      competencia: [{value:'',disabled:true}, [Validators.required, Validators.maxLength(600)]],
      tipo_saber: ['', [Validators.required, Validators.maxLength(10)]],
      saber_asociado: [{value:'',disabled:true}, [Validators.required, Validators.maxLength(255)]],
      taxonomia: ['', [Validators.required, Validators.maxLength(10)]],
      dominio_tratar: ['', [Validators.required, Validators.maxLength(20)]],
      nivel_dominio: ['', [Validators.required, Validators.maxLength(20)]],
      verbo: ['', [Validators.required, Validators.maxLength(25), this.containVerb()]],
      resultado_ap: ['', [Validators.required, Validators.maxLength(600)]],
      id_programa: ['', Validators.required]
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

  ngOnInit() {
    const competencia = localStorage.getItem('competencia') || ''
    const saber_asociado =localStorage.getItem('saber_asociado')|| ''
    this.form.patchValue({
      competencia: competencia,
      saber_asociado: saber_asociado,
    });
  }

  onFocus() {
    this.showSuggestions = true;
  }

  onBlur() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200);
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

  @Output() esFormularioValido = new EventEmitter<boolean>();

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.esFormularioValido.emit(this.form.valid);
    } else {
      console.log('Formulario inválido');
    }
  }
}
