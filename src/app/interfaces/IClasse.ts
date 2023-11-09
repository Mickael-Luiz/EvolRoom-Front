import { IStudent } from './IStudent';

export interface IClasse{
  idClasse: number;
  date: string;
  subject: string;
  enrolledStudents?: IStudent[];
}
