export interface IInfoTable {
  column: string;
  field: string;
  buttons?: IActionColumn[];
  align?: string;
}

interface IActionColumn {
  icon: string;
  color: string;
  backgroundColor: string;
}
