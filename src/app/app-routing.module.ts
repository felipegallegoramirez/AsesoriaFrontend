import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { PerfilEgresoComponent } from './components/perfil-egreso/perfil-egreso.component';


const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'PerfilEgreso', component: PerfilEgresoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
