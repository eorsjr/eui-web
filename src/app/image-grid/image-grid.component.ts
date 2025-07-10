import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxTargetDirective } from '../directives/lightbox-target.directive';

@Component({
  selector: 'cxw-image-grid',
  standalone: true,
  imports: [CommonModule, LightboxTargetDirective],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css'
})
export class ImageGridComponent {

  constructor() { }

  @Input() images: { src: string; alt?: string; width?: string; height?: string }[] = [];

  /**
   * Opens an image in a new tab.
   * @param src The source URL of the image to open in a new tab.
   * @returns {void}
   */
  public openImage(src: string): void {
    window.open(src, '_blank');
  }
}
