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
    {label: "Financeiro", icon: 'pi-dollar', url: 'financial'},
    {label: "EducaJogos", icon: 'pi-prime', url: 'edugames'}
  ]

  secondaryOptions: IOption[] = [
    {label: "Avisos", icon: 'pi-megaphone', url: 'notice'},
    {label: "Suporte", icon: 'pi-phone', url: 'support'},
    {label: "Preferencias", icon: 'pi-cog', url: 'preferences'},
  ]

}
