import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { NavigationService } from '../services/navigation.service';
import { IconButtonComponent } from '../buttons/icon-button/icon-button.component';

@Component({
  selector: 'cxw-app-bar',
  standalone: true,
  imports: [IconButtonComponent],
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.css'
})
export class AppBarComponent {

  constructor(public themeService: ThemeService, public navService: NavigationService) {
  }

  /**
 * Toggles between light and dark color schemes.
 */
  public toggleColorScheme(): void {
    this.themeService.toggleColorScheme();
  }

  /**
   * Switches to the next theme in the themes array.
   */
  public switchTheme(): void {
    this.themeService.switchTheme();
  }

  /**
   * Switches to the next font in the fonts array.
   */
  public switchFont(): void {
    this.themeService.switchFont();
  }

}
