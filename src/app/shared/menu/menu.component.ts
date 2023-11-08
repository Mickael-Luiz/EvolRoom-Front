import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface IOption {
  label: string,
  icon: string,
  url: string,
  activated: boolean
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {

  menuActivated: string = ''
  routeActivated: string = ''

  primaryOptions: IOption[] = [
    { label: "Academico", icon: 'pi-id-card', url: 'academic', activated: false },
    { label: "Biblioteca", icon: 'pi-book', url: 'library', activated: false },
    { label: "Financeiro", icon: 'pi-dollar', url: 'financial', activated: false },
    { label: "EducaJogos", icon: 'pi-prime', url: 'edugames', activated: false }
  ]

  secondaryOptions: IOption[] = [
    { label: "Avisos", icon: 'pi-megaphone', url: 'notice', activated: false },
    { label: "Suporte", icon: 'pi-phone', url: 'support', activated: false },
    { label: "Preferencias", icon: 'pi-cog', url: 'preferences', activated: false },
  ]

  constructor(private router: Router, private route: ActivatedRoute) {
    setTimeout(() => {
      this.routeActivated = this.router.url.replace('/', '');
      console.log('cons: ', this.routeActivated);
      this.setMenuActivated(this.routeActivated)
    }, 100)
  }

  setMenuActivated(url: string) {
    this.primaryOptions.forEach(option => option.activated = option.url == url);
    this.secondaryOptions.forEach(option => option.activated = option.url == url);
    this.router.navigate([`/${url}`]);
  }

}
