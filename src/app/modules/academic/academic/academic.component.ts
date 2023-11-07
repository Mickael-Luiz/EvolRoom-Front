import { CourseService } from '../../../services/course.service';
import { Component } from '@angular/core';
import { ICourse } from 'src/app/interfaces/ICourse';
import { IDiscipline } from 'src/app/interfaces/IDiscipline';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent {

  courses: ICourse[] = []
  disciplines: IDiscipline[] = []


  constructor(private courseService: CourseService) {
    this.setData()
  }

  async setData() {
    await this.getCourses()
    await this.getDisciplines()
  }

  async getCourses() {
    this.courses = await this.courseService.getJSONData() || [];
  }

  async getDisciplines() {
    this.courses.forEach(course => {
      course.subjectGrid.forEach(discipline => discipline.teacher == "Ed Wilson" && this.disciplines.push(discipline));
    })
  }


  // = [
  //   {
  //     title: 'Programação Orientada a Objetos 2',
  //     idCourse: 1,
  //     coordinator: 'Lidia M Silva',
  //     semester: '3° Semestre'
  //   },
  //   {
  //     title: 'Banco de Dados',
  //     idCourse: 1,
  //     coordinator: 'Lidia M Silva',
  //     semester: '2° Semestre'
  //   },
  //   {
  //     title: 'Desenvolvimento Web 2',
  //     idCourse: 2,
  //     coordinator: 'Lidia M Silva',
  //     semester: '5° Semestre'
  //   },
  //   {
  //     title: 'Projeto Integrador IV',
  //     idCourse: 1,
  //     coordinator: 'Lidia M Silva',
  //     semester: '4° Semestre'
  //   },
  //   {
  //     title: 'Engenharia de Software',
  //     idCourse: 2,
  //     coordinator: 'Lidia M Silva',
  //     semester: '2° Semestre'
  //   },
  //   {
  //     title: 'Lógica Matemática',
  //     idCourse: 2,
  //     coordinator: 'Lidia M Silva',
  //     semester: '1° Semestre'
  //   },
  // ]

}
