import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { EstudiantesComponent }      from '../estudiantes/estudiantes.component';
import { EstudianteDetalleComponent }  from '../estudiante-detalle/estudiante-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: EstudianteDetalleComponent },
  { path: 'estudiantes', component: EstudiantesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}