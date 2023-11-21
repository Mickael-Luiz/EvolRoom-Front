import { Component, Input } from '@angular/core';
import { IInfoTable } from 'src/app/interfaces/IInfoTable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() columns: string[] = []
  @Input() infoTable: IInfoTable[] = []
  @Input() tableData: object[] = []

  getProp(obj: any, prop: string) {
    return obj[prop];
  }

  // getStatusColor(row: any) {
  //   const currentTheme = window.document.documentElement.classList.value
  //   console.log(currentTheme);

  //     switch (row.status) {
  //       case 'Avaliado':
  //         return currentTheme ? '#184b20' : '#b6ecaf';
  //       case 'Pendente':
  //         return currentTheme ? '#4b4818' : '#e8ecaf';
  //       case 'Não Enviado':
  //         return currentTheme ? '#4b1818' : '#ecafaf';

  //       default:
  //         return;
  //     }

  // }
  getStatusColor(row: any) {
    const currentTheme = window.document.documentElement.classList.value
    console.log(currentTheme);

    switch (row.status) {
      case 'Avaliado':
        return { 'background-color': currentTheme ? '#184b20' : '#b6ecaf', 'color': currentTheme ? '#b6ecaf' : '#184b20' };
      case 'Pendente':
        return { 'background-color': currentTheme ? '#4b4818' : '#e8ecaf', 'color': currentTheme ? '#e8ecaf' : '#4b4818' };
      case 'Não Enviado':
        return { 'background-color': currentTheme ? '#4b1818' : '#ecafaf', 'color': currentTheme ? '#ecafaf' : '#4b1818' };
      default:
        return {};
    }

  }
}
