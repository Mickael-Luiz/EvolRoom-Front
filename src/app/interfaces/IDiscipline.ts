import { IClasse } from './IClasse';

export interface IDiscipline {
  idDiscipline: number;
  title: string;
  idCourse: number;
  coordinator: string;
  semester: string;
  teacher: string;
  hour: string;
  classes?: IClasse[];
}
