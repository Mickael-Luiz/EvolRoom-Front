import { Component } from '@angular/core';
import { IInfoTable } from 'src/app/interfaces/IInfoTable';
import { IStudent } from 'src/app/interfaces/IStudent';

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
    {column: 'Nome', field: 'name'},
    {column: 'Turma', field: 'class', align: 'center'},
    {column: 'Status', field: 'status', align: 'center'},
    {column: 'Ações', field: 'action', align: 'center', buttons: [
      { icon: 'pi pi-eye', color: 'blue', backgroundColor: 'white' },
      { icon: 'pi pi-check', color: 'green', backgroundColor: 'white' },
    ]}
  ]
  tableData: object[] = [
    {name: 'Mickael Luiz Dias da Silva', class: '3 Semestre', status: 'Avaliado'},
    {name: 'Mickael Luiz Dias da Silva', class: '4 Semestre', status: 'Pendente'},
    {name: 'Mickael Luiz Dias da Silva', class: '1 Semestre', status: 'Avaliado'},
    {name: 'Mickael Luiz Dias da Silva', class: '2 Semestre', status: 'Não Enviado'}
  ]

}
