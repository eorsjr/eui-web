import { Component } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';

@Component({
  selector: 'eui-lightbox',
  standalone: true,
  imports: [CommonModule, IconButtonComponent],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css',
  host: {
    '[class.visible]': 'lightboxService.lightboxOpen()'
  }
})
export class LightboxComponent {

  constructor(public lightboxService: LightboxService) { }

  public loaded = false;

  /**
   * Called when the lightbox image loads.
   * Triggers the fade-in effect.
   * @returns {void}
   */
  public onImageLoad(): void {
    this.loaded = true;
  }

  /**
   * Closes the lightbox overlay.
   * @returns {void}
   */
  public closeLightbox(): void {
    this.loaded = false;
    this.lightboxService.closeLightbox();
  }

  /**
   * Shows the previous image in the lightbox.
   * @returns {void}
   */
  public showPreviousImage(): void {
    this.loaded = false;
    this.lightboxService.showPreviousImage();
  }

  /**
   * Shows the next image in the lightbox.
   * @returns {void}
   */
  public showNextImage(): void {
    this.loaded = false;
    this.lightboxService.showNextImage();
  }

}
