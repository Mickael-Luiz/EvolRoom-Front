import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/interfaces/ICourse';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-card-curso',
  templateUrl: './card-curso.component.html',
  styleUrls: ['./card-curso.component.scss']
})
export class CardCursoComponent {

  @Input() title: string = '';
  @Input() idCourse: number = 0;
  @Input() semester: string = '? Semestre';
  @Input() coordinator: string = ''

  courses: ICourse[] = []

  constructor(private courseService: CourseService) {
    this.getCourses();
  }

  async getCourses() {
    this.courses = await this.courseService.getJSONData() || [];
  }

  loadTitle() {
    return this.courses.find(course => course.id == this.idCourse)?.title;
  }

}