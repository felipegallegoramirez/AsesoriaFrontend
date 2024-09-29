import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { FormComponent } from './components/form/form.component';
import { PerfilEgresoComponent } from './components/perfil-egreso/perfil-egreso.component';
import { SaberComponent } from './components/saber/saber.component';
import { ATProfesionalesComponent } from './components/atprofesionales/atprofesionales.component';
import { AProfesionalComponent } from './components/aprofesional/aprofesional.component';
import { TProfesionalComponent } from './components/tprofesional/tprofesional.component';
import { PActuacionComponent } from './components/pactuacion/pactuacion.component';
import { VAgregadoComponent } from './components/vagregado/vagregado.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';
import { ResAprendizajeComponent } from './components/res-aprendizaje/res-aprendizaje.component';
import { EstMesocurricularComponent } from './components/est-mesocurricular/est-mesocurricular.component';
import { IndImpactoComponent } from './components/ind-impacto/ind-impacto.component';
import { AcRetroalComponent } from './components/ac-retroal/ac-retroal.component';
import { InstMedicionComponent } from './components/inst-medicion/inst-medicion.component';
import { FormCentralComponent } from './pages/form-central/form-central.component';


const routes: Routes = [
  { path: '', component: FormCentralComponent },
  { path: 'form', component: FormComponent },
  { path: 'PerfilEgreso', component: PerfilEgresoComponent },
  { path: 'SaberComponent', component: SaberComponent },
  { path: 'ATProfesionalesComponent', component: ATProfesionalesComponent },
  { path: 'AProfesionalComponent', component: AProfesionalComponent },
  { path: 'TProfesionalComponent', component: TProfesionalComponent },
  { path: 'PActuacionComponent', component: PActuacionComponent },
  { path: 'VAgregadoComponent', component: VAgregadoComponent },
  { path: 'CompetenciasComponent', component: CompetenciasComponent },
  { path: 'ResAprendizajeComponent', component: ResAprendizajeComponent },
  { path: 'EstMesocurricularComponent', component: EstMesocurricularComponent },
  { path: 'IndImpactoComponent', component: IndImpactoComponent },
  { path: 'AcRetroalComponent', component: AcRetroalComponent },
  { path: 'InstMedicionComponent', component: InstMedicionComponent },
  { path: 'formulario', component: FormCentralComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
