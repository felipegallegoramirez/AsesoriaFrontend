import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PerfilEgresoComponent,
    SaberComponent,
    ATProfesionalesComponent,
    AProfesionalComponent,
    TProfesionalComponent,
    PActuacionComponent,
    VAgregadoComponent,
    CompetenciasComponent,
    ResAprendizajeComponent,
    EstMesocurricularComponent,
    IndImpactoComponent,
    AcRetroalComponent,
    InstMedicionComponent,
    FormCentralComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
