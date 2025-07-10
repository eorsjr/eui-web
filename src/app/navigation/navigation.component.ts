import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FlexibleNavigationBarComponent } from "./flexible-navigation-bar/flexible-navigation-bar.component";
import { NavigationRailComponent } from "./navigation-rail/navigation-rail.component";

@Component({
  selector: 'cxw-navigation',
  standalone: true,
  imports: [FlexibleNavigationBarComponent, NavigationRailComponent],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {

  constructor(private router: Router, private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateActiveIndicator((event as NavigationEnd).urlAfterRedirects);
      });

    this.updateActiveIndicator(this.router.url);
  }

  /**
   * Updates the active indicator on navigation items based on the current URL.
   * @param currentUrl The current URL to match against navigation routes.
   */
  private updateActiveIndicator(currentUrl: string): void {
    const navItems = this.elRef.nativeElement.querySelectorAll('.nav-item');

    navItems.forEach((el: HTMLElement) => {
      const route = el.getAttribute('customLink') || el.getAttribute('routerLink');
      this.renderer.removeAttribute(el, 'id');

      if (route && this.matchRoute(route, currentUrl)) {
        this.renderer.setAttribute(el, 'id', 'active-indicator');
      }
    });
  }

  /**
   * Checks if the given route matches the current URL.
   * @param route Route string from the navigation item.
   * @param currentUrl Current URL from the router.
   * @returns True if the route matches the current URL, otherwise false.
   */
  private matchRoute(route: string, currentUrl: string): boolean {
    return currentUrl.split('#')[0] === route;
  }
}
