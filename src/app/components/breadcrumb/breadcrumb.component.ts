import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent {

  @Input() page: string[] = []
  splitPath: string[] = []

  constructor(private router: Router) {
    setTimeout(() => {
      let splitPathTemp = this.router.url.split('/').filter(el => el != '');
      this.splitPath = splitPathTemp ? splitPathTemp.slice(0) : []
    }, 100);
  }

  navigateTo(url: string) {
    let indiceUrl = this.splitPath.indexOf(url);
    let path = this.splitPath.slice(0, indiceUrl + 1)
    this.router.navigate([path.join('/')])
  }

}
