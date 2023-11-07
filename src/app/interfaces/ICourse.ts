import { IDiscipline } from './IDiscipline';

export interface ICourse {
  id: number;
  title: string;
  subjectGrid: IDiscipline[];
  coordinator: string;
  icon: string;
}
