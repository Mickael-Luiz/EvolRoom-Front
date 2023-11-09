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
    this.courses = await this.courseService.getJSONData() ?? [];
  }

  async getDisciplines() {
    this.courses.forEach(course => {
      course.subjectGrid.forEach(discipline => discipline.teacher == "Ed Wilson" && this.disciplines.push(discipline));
    })
  }

}
