import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollingService } from '../services/scrolling.service';

@Component({
  selector: 'cxw-pane',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pane.component.html',
  styleUrl: './pane.component.css'
})
export class PaneComponent {
  constructor(private router: Router, private scrollingService: ScrollingService) { }

  /**
   * Lifecycle hook that runs after component initialization.
   * 
   * - Adds a temporary `.preload` class to the `.pane` element to prevent transitions on route load.
   * - Subscribes to router navigation events:
   *    - Enables scrolling via the ScrollingService.
   *    - Scrolls to top after navigation.
   *    - If the URL contains a fragment, attempts to smoothly scroll to the corresponding element.
   * @returns {void}
   */
  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollingService.enableScroll();
        this.scrollingService.jumpToTop();
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            const target = document.getElementById(fragment);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 0);
        }
        const pane = document.querySelector('.pane');
        if (pane) {
          pane.classList.add('preload');
          setTimeout(() => {
            pane.classList.remove('preload');
          }, 100);
        }
      });
  }
}
