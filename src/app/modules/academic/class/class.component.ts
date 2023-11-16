import { Component } from '@angular/core';
import { IStudent } from 'src/app/interfaces/IStudent';

export interface IInfoTable {
  column: string;
  field: string;
  type: string;
  align?: string;
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent {

  page: string[] = ['academico', 'aulas', 'Aula ?'];
  students!: IStudent[];
  columns: string[] = ['Nome', 'Turma', 'Status']
  infoTable: IInfoTable[] = [
    {column: 'Nome', field: 'name', type: 'text'},
    {column: 'Turma', field: 'class', type: 'text', align: 'center'},
    {column: 'Status', field: 'status', type: 'text', align: 'center'},
    // {column: 'Ações', field: 'action', type: 'button'}
  ]
  tableData: object[] = [
    {name: 'Mickael Luiz Dias da Silva', class: '3 Semestre', status: 'Avaliado'},
    {name: 'Mickael Luiz Dias da Silva', class: '4 Semestre', status: 'Pendente'},
    {name: 'Mickael Luiz Dias da Silva', class: '1 Semestre', status: 'Avaliado'},
    {name: 'Mickael Luiz Dias da Silva', class: '2 Semestre', status: 'Não Enviado'}
  ]

  constructor() {

  }

}
