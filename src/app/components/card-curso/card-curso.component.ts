import { Router } from '@angular/router';
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

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {
    this.getCourses();
  }

  async getCourses() {
    this.courses = await this.courseService.getJSONData() ?? [];
  }

  selectCourse() {
    return this.courses.find(course => course.id == this.idCourse);
  }

  navigateTo() {
    console.log('teste');

    this.router.navigate(['/academic/classes']);
  }

}
