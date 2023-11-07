import { Component, Input } from '@angular/core';

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

}
