import { Component } from '@angular/core';

import { Router } from '@angular/router';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {

  beneficitVisible: boolean = false

  constructor(private router: Router) { }

  goToSubscriptionPlans() {
    this.router.navigate(['register/instituteregister'])
  }

}
