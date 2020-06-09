import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudianteDetalleComponent } from './estudiante-detalle/estudiante-detalle.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, EstudiantesComponent, EstudianteDetalleComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
