import { Component } from '@angular/core';
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './about.component.html'
})
export class AboutComponent {

}
