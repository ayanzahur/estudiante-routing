import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Estudiante } from '../estudiantes/estudiante';
import { EstudianteService }  from '../estudiante.service';

@Component({
  selector: 'app-estudiante-detalle',
  templateUrl: './estudiante-detalle.component.html',
  styleUrls: ['./estudiante-detalle.component.css']
})
export class EstudianteDetalleComponent implements OnInit {
  
  estudiante: Estudiante;
  constructor( private route: ActivatedRoute,
    private estudianteService: EstudianteService,
    private location: Location) { }

  ngOnInit() {
    this.getEstudiante();
  }

  getEstudiante(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estudianteService.getEstudiante(id)
      .subscribe(estudiante => this.estudiante = estudiante);
  }

  goBack(): void {
    this.location.back();
  }

}


 

  
