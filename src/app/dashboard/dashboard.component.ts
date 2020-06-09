import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiantes/estudiante';
import { EstudianteService } from '../estudiante.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  estudiantes:Estudiante[] = [];
  constructor(private estudianteService:EstudianteService) { }

  ngOnInit() {
    this.getEstudiantes();
  }

   getEstudiantes(): void {
    this.estudianteService.getEstudiantes()
      .subscribe(estudiantes => this.estudiantes = estudiantes.slice(1, 5));
  }
}
