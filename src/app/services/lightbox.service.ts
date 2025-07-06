import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { ScrimService } from './scrim.service';
import { ScrollingService } from './scrolling.service';

@Injectable({
  providedIn: 'root'
})

export class LightboxService {

  constructor(private scrimService: ScrimService, private scrollingService: ScrollingService) { }

  public lightboxOpen = signal(false); // Signal to track whether the lightbox is open
  public images = signal<{ src: string, alt?: string }[]>([]); // Signal to store the array of images for the lightbox
  public currentIndex = signal<number>(0); // Signal to track the current image index in the lightbox

  /**
 * Opens the lightbox with the provided images and sets the current index.
 * Also shows the scrim overlay.
 * @param images Array of image objects to display in the lightbox
 * @param index Index of the image to display first (default: 0)
 * @returns {void}
 */
  public openLightbox(images: { src: string, alt?: string }[], index: number = 0): void {
    this.images.set(images);
    this.currentIndex.set(index);
    this.lightboxOpen.set(true);
    this.scrimService.setZIndex(4);
    this.scrimService.isVisible.set(true);
    this.scrollingService.disableScroll();
  }

  /**
   * Closes the lightbox and hides the scrim overlay.
   * @returns {void}
   */
  public closeLightbox(): void {
    this.lightboxOpen.set(false);
    this.scrimService.isVisible.set(false);
    this.scrollingService.enableScroll();
  }

  /**
   * Shows the previous image in the lightbox.
   * Wraps around to the last image if at the beginning.
   * @returns {void}
   */
  public showPreviousImage(): void {
    const images = this.images();
    let newIndex = this.currentIndex() - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    this.currentIndex.set(newIndex);
  }

  /**
   * Shows the next image in the lightbox.
   * Wraps around to the first image if at the end.
   * @returns {void}
   */
  public showNextImage(): void {
    const images = this.images();
    let newIndex = this.currentIndex() + 1;
    if (newIndex >= images.length) newIndex = 0;
    this.currentIndex.set(newIndex);
  }

  /**
  * Returns the currently displayed image object.
  * @returns {{ src: string, alt?: string }} The current image object
  */
  public currentImage(): { src: string, alt?: string } {
    return this.images()[this.currentIndex()];
  }

}
