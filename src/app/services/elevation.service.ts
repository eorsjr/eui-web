import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElevationService {

  constructor() { }

  private appBar: HTMLElement | null = null; // Reference to the top app bar element

  /**
   * Initializes the elevation service by setting up event listeners for scroll and resize events.
   * @returns {void}
   */
  public initialize(): void {
    this.appBar = document.querySelector('.app-bar');
    window.addEventListener('scroll', () => this.updateElevation());
    window.addEventListener('resize', () => this.updateElevation());
  }

  /**
   * Updates the elevation of the top app bar based on the scroll position or if the navigation rail is open.
   * @returns {void}
   */
  public updateElevation(): void {

    const scrolled = window.scrollY > 0;

    if (!this.appBar) return;
    if (scrolled && window.innerWidth < 840) {
      this.appBar.style.setProperty('box-shadow', 'var(--elevation-level-2)');
    } else {
      this.appBar.style.setProperty('box-shadow', 'none');
    }
  }
}
