import { Directive, ElementRef, HostListener } from '@angular/core';
import { LightboxService } from '../services/lightbox.service';

@Directive({
  selector: 'img[lightboxTarget]',
  standalone: true
})
export class LightboxTargetDirective {

  constructor(private el: ElementRef<HTMLImageElement>, private lightboxService: LightboxService) { }

  /**
 * Handles click events on the host image element.
 * Opens the lightbox with all images that have the lightboxTarget attribute.
 * @returns {void}
 */
  @HostListener('click')
  public onClick(): void {
    const images = Array.from(document.querySelectorAll('img[lightboxTarget]')) as HTMLImageElement[];
    const imagesArray = images.map(img => ({
      src: img.src,
      alt: img.alt
    }));
    const clickedIndex = images.indexOf(this.el.nativeElement);
    this.lightboxService.openLightbox(imagesArray, clickedIndex);
  }
}
