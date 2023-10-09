import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-edugames-home',
  templateUrl: './edugames-home.component.html',
  styleUrls: ['./edugames-home.component.scss']
})
export class EdugamesHomeComponent {

  filter!: FormGroup

matters: SelectItem[] = [
  { label: 'Desenvolvimento Web', value: 1},
  { label: 'Inglês', value: 2},
  { label: 'Estrutura de Dados', value: 3},
  { label: 'Geografia', value: 4},
  { label: 'Matemática', value: 5},
]

types: SelectItem[] = [
  {label: 'Quiz', value: 1},
  {label: '7 erros', value: 2},
  {label: 'Logica', value: 3},
  {label: 'Jogo do milhão', value: 4},
  {label: 'Caça Palavras', value: 5},
]

paymentOptions: SelectItem[] = [
  { label: 'Todos', value: 1 },
  { label: 'Internos', value: 2 },
  { label: 'Externos', value: 3 }
];

  constructor(
    private fb: FormBuilder
  ) {
    this.fb.group({
      matters: [''],
      types: [''],
      font: ['']
    })
  }

}
