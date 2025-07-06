import { Component } from '@angular/core';
import { SlideshowComponent } from "../../slideshow/slideshow.component";
import { ImageGridComponent } from "../../image-grid/image-grid.component";
import { CardComponent } from "../../card/card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [SlideshowComponent, ImageGridComponent, CardComponent],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {

}