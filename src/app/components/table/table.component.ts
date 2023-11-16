import { Component, Input } from '@angular/core';
import { IInfoTable } from 'src/app/modules/academic/class/class.component';

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

}
