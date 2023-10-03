import { Component } from '@angular/core';

interface IOption {
  label: string,
  icon: string,
  url: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {

  primaryOptions: IOption[] = [
    {label: "Academico", icon: 'pi-id-card', url: 'academic'},
    {label: "Biblioteca", icon: 'pi-book', url: 'library'},
    {label: "Financeiro", icon: 'pi-dollar', url: ''},
    {label: "EducaJogos", icon: 'pi-prime', url: ''}
  ]

  secondaryOptions: IOption[] = [
    {label: "Avisos", icon: 'pi-megaphone', url: ''},
    {label: "Suporte", icon: 'pi-phone', url: ''},
    {label: "Preferencias", icon: 'pi-cog', url: ''},
  ]

}
