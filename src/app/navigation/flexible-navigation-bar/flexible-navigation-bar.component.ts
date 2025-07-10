import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollingService } from '../../services/scrolling.service';

@Component({
  selector: 'cxw-flexible-navigation-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './flexible-navigation-bar.component.html',
  styleUrl: './flexible-navigation-bar.component.css'
})
export class FlexibleNavigationBarComponent {
  constructor(public scrollingService: ScrollingService) { }
}
