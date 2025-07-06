import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { ElevationService } from './elevation.service';
import { ScrimService } from './scrim.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private elevationService: ElevationService, private scrimService: ScrimService) { }

  public navigationRailOpen = signal(false); // Signal to track whether the navigation rail is open

  /**
   * Toggles the navigation rail's visibility and updates its class.
   * @returns {void}
   */
  public toggleNavigationRail(): void {
    const rail = document.querySelector('.navigation-rail');

    if (rail) {
      if (window.innerWidth < 840) {
        this.navigationRailOpen.set(!this.navigationRailOpen());
        rail.classList.toggle('show');
        this.elevationService.updateElevation();
        this.scrimService.setZIndex(2);
        this.scrimService.isVisible.set(this.navigationRailOpen());
      }
    }

  }

  /**
   * Sets up a window resize listener to close the navigation rail if the window width is at least 840px.
   * @returns {void}
   */
  public setupAutoCloseOnResize(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 840) {
        this.closeNavigationRail();
      }
    });
  }

  /**
   * Closes the navigation rail and updates its class.
   * @returns {void}
   */
  public closeNavigationRail(): void {
    const rail = document.querySelector('.navigation-rail');

    if (rail) {
      this.navigationRailOpen.set(false);
      rail.classList.remove('show');
      this.elevationService.updateElevation();
      this.scrimService.isVisible.set(false);
    }
  }

}

