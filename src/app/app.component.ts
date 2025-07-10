import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { PaneComponent } from "./pane/pane.component";
import { AppBarComponent } from "./app-bar/app-bar.component";
import { ThemeService } from './services/theme.service';
import { ElevationService } from './services/elevation.service';
import { NavigationService } from './services/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrimComponent } from './scrim/scrim.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { LightboxService } from './services/lightbox.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, PaneComponent, AppBarComponent, ScrimComponent, LightboxComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'eui-web';

  constructor(private router: Router, private themeService: ThemeService, private elevationService: ElevationService, private navigationService: NavigationService, private lightboxService: LightboxService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.themeService.setInitialFont();
      });
  }

  ngAfterViewInit() {
    this.themeService.setInitialTheme();
    this.themeService.setInitialColorScheme();
    this.themeService.handleColorSchemeChange();
    setTimeout(() => {
      this.themeService.updateThemeColor();
    });
    this.elevationService.initialize();
    this.navigationService.setupAutoCloseOnResize();
  }
}
