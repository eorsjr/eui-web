import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../card/card.component";
import { ButtonComponent } from "../../buttons/button/button.component";

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './components.component.html'
})
export class ComponentsComponent {

}
