import { Component } from '@angular/core';
import { IDiscipline } from 'src/app/interfaces/IDiscipline';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent {

  disciplines: IDiscipline[] = [
    {
      title: 'Programação Orientada a Objetos 2',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '3° Semestre'
    },
    {
      title: 'Engenharia de Software',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '2° Semestre'
    },
    {
      title: 'Desenvolvimento Web 2',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '5° Semestre'
    },
    {
      title: 'Projeto Integrador IV',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '4° Semestre'
    },
    {
      title: 'Engenharia de Software',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '2° Semestre'
    },
    {
      title: 'Lógica Matemática',
      idCourse: 1,
      coordinator: 'Lidia M Silva',
      semester: '1° Semestre'
    },
  ]

}
