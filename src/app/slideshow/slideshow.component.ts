import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cxw-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {
  @Input() images: { src: string; alt?: string }[] = []; // Array of images to display in the slideshow

  currentIndex = 0; // Index of the currently displayed image
  private intervalId: any; // Reference to the slideshow interval timer

  /**
   * Angular lifecycle hook that is called after data-bound properties are initialized.
   * Starts the slideshow if there are multiple images.
   * @returns {void}
   */
  ngOnInit(): void {
    if (this.images.length > 1) {
      this.startSlideshow();
    }
  }

  /**
   * Angular lifecycle hook that is called when the component is destroyed.
   * Clears the slideshow interval.
   * @returns {void}
   */
  ngOnDestroy(): void {
    clearTimeout(this.intervalId);
  }

  /**
   * Starts the slideshow by changing the current image index every 5 seconds.
   * @returns {void}
   */
  private startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

}
