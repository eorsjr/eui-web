import { Component } from '@angular/core';
import { SlideshowComponent } from "../../slideshow/slideshow.component";
import { ImageGridComponent } from "../../image-grid/image-grid.component";
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-visuals',
  standalone: true,
  imports: [SlideshowComponent, ImageGridComponent, CardComponent],
  templateUrl: './visuals.component.html'
})
export class VisualsComponent {

}