import { Component, effect } from '@angular/core';
import { ScrollingService } from '../services/scrolling.service';
import { NavigationService } from '../services/navigation.service';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'cxw-scrim',
  standalone: true,
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent {

  private railOpen = false; // Tracks if the navigation rail is open

  constructor(private scrollingService: ScrollingService, public navService: NavigationService, public scrimService: ScrimService) {
    effect(() => {
      this.railOpen = this.navService.navigationRailOpen();

      if (this.railOpen) {
        this.scrollingService.disableScroll();
      } else {
        this.scrollingService.enableScroll();
      }
    });
  }

  /**
   * Toggles the navigation rail if it is currently open.
   * @returns {void}
   */
  public toggleRail(): void {
    if (this.navService.navigationRailOpen()) {
      this.navService.toggleNavigationRail();
    }
  }
}