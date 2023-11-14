import { Component } from '@angular/core';
import { IStudent } from 'src/app/interfaces/IStudent';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {

  page: string[] = ['academico', 'aulas', 'Aula ?'];
  students!: IStudent[];

  constructor() {

  }

}
