import { Component } from '@angular/core';
import { CoreModule } from 'src/app/shared/core.module';


@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})
export class InitialComponent {

  beneficitVisible = false

  constructor() {

  }

  showBeneficit() {
    this.beneficitVisible = !this.beneficitVisible
  }

}
