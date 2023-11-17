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
    console.log('teste');
    return obj[prop];
  }

}
