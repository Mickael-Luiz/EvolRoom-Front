import { Component } from '@angular/core';
import { IClasse } from 'src/app/interfaces/IClasse';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {

  classes: IClasse[] = [
    {
      idClasse: 8,
      date: '15/11/2023',
      subject: 'Aula 8 - Correção da prova',
    },
    {
      idClasse: 7,
      date: '14/11/2023',
      subject: 'Aula 7 - Prova 1',
    },
    {
      idClasse: 6,
      date: '13/11/2023',
      subject: 'Aula 6 - Atividade 2',
    },
    {
      idClasse: 5,
      date: '10/11/2023',
      subject: 'Aula 5 - Seminário',
    },
    {
      idClasse: 4,
      date: '09/11/2023',
      subject: 'Aula 4 - Leitura coletiva',
    },
    {
      idClasse: 3,
      date: '08/11/2023',
      subject: 'Aula 3 - Atividade 1',
    },
    {
      idClasse: 2,
      date: '07/11/2023',
      subject: 'Aula 2 - Introdução',
    },
    {
      idClasse: 1,
      date: '06/11/2023',
      subject: 'Aula 1 - Ementa',
    }
  ]
}
