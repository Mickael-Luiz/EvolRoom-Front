import { Component } from '@angular/core';

interface IOption {
  label: string,
  icon: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {

  primaryOptions: IOption[] = [
    {label: "Academico", icon: 'pi-id-card'},
    {label: "Biblioteca", icon: 'pi-book'},
    {label: "Financeiro", icon: 'pi-dollar'},
    {label: "EducaJogos", icon: 'pi-prime'}
  ]

  secondaryOptions: IOption[] = [
    {label: "Avisos", icon: 'pi-megaphone'},
    {label: "Suporte", icon: 'pi-phone'},
    {label: "Preferencias", icon: 'pi-cog'},
  ]

}
