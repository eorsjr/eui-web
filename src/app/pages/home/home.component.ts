import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from '../../slideshow/slideshow.component';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SlideshowComponent, CardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
