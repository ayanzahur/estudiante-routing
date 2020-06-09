import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Estudiante } from './estudiantes/estudiante';
import { ESTUDIANTES } from './lista-estudiantes';

@Injectable({
  providedIn: 'root',
})
export class EstudianteService {

  constructor() { }
  
  getEstudiantes(): Observable<Estudiante[]> {
    return of(ESTUDIANTES);
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return of(ESTUDIANTES.find(estudiante => estudiante.id === id));
  }
}
