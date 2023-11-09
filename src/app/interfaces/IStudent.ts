import { IDiscipline } from './IDiscipline';

export interface IStudent {
  idStudent: number;
  name: string;
  dateBirth: string;
  ongoingDiscipline: IDiscipline[]
  disciplineCompleted: IDiscipline[]
  disciplineNotTaken: IDiscipline[]
}
