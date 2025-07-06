import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // Define available themes and fonts
  private themes = ["silver", "green", "yellow", "orange", "pink", "baseline", "blue"];
  private fonts = ["Noto Sans", "Anta", "Limelight", "Pattaya"];
  private themeIndex = 0;
  private fontIndex = 0;

  public isDarkMode = signal(document.body.classList.contains('dark')); // Signal to track whether the current color scheme is dark mode.

  /**
 * Applies the initial theme from local storage or falls back to the default.
 * @returns {void}
 */
  public setInitialTheme(): void {
    const selectedTheme = this.getStoredOrDefault("theme", this.themes[this.themeIndex]);
    this.themeIndex = this.themes.indexOf(selectedTheme);
    document.body.className = selectedTheme;
  }

  /**
 * Applies the initial font from local storage or falls back to the default.
 * Uses a delayed execution to ensure headers are rendered.
 * @returns {void}
 */
  public setInitialFont(): void {
    const selectedFont = this.getStoredOrDefault("font", this.fonts[this.fontIndex]);
    this.fontIndex = this.fonts.indexOf(selectedFont);
    setTimeout(() => {
      this.applyFont(selectedFont);
    });
  }

  /**
 * Applies the initial color scheme (dark or light) based on local storage or system preference.
 * @returns {void}
 */
  public setInitialColorScheme(): void {
    const darkThemeLocalStorageValue = this.getLocalStorage("dark");
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = darkThemeLocalStorageValue === "true" ||
      (darkThemeLocalStorageValue === "" && prefersDarkScheme);

    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    this.isDarkMode.set(isDark);
  }

  /**
 * Switches to the next theme in the list and updates local storage.
 * Also updates the browser's theme color meta tag.
 * @returns {void}
 */
  public switchTheme(): void {
    this.themeIndex = (this.themeIndex + 1) % this.themes.length;
    const theme = this.themes[this.themeIndex];
    document.body.classList.remove(...this.themes);
    document.body.classList.add(theme);
    this.setLocalStorage("theme", theme);
    this.updateThemeColor();
  }

  /**
  * Switches to the next font in the list and updates local storage.
  * @returns {void}
  */
  public switchFont(): void {
    this.fontIndex = (this.fontIndex + 1) % this.fonts.length;

    const font = this.fonts[this.fontIndex];
    this.applyFont(font);
    this.setLocalStorage("font", font);
  }

  /**
   * Handles changes in the system's color scheme preference and updates the color scheme accordingly.
   * @returns {void}
   */
  public handleColorSchemeChange(): void {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (event) => {
      const prefersDarkScheme = event.matches;
      document.body.classList.toggle('dark', prefersDarkScheme);
      this.setLocalStorage('dark', prefersDarkScheme ? 'true' : 'false');
      this.isDarkMode.set(prefersDarkScheme);
      this.updateThemeColor();
    });
  }

  /**
  * Toggles between dark and light mode and updates local storage accordingly.
  * @returns {void}
  */
  public toggleColorScheme(): void {
    document.body.classList.toggle('dark');
    this.setLocalStorage('dark', document.body.classList.contains('dark') ? 'true' : 'false');
    this.isDarkMode.set(document.body.classList.contains('dark'));
    this.updateThemeColor();
  }

  /**
   * Updates the browser's theme color meta tag based on the current surface color.
   * @returns {void}
   */
  public updateThemeColor(): void {
    // Get the computed value of the CSS custom property for the theme color
    const themeColor = getComputedStyle(document.body)
      .getPropertyValue('--md-sys-color-surface-container')
      .trim();

    // Set the theme color meta tag with the retrieved color
    this.setThemeColorMetaTag(themeColor);
  }

  /**
 * Applies the specified font to all relevant elements on the page.
 * @param {string} font - The font family to apply.
 */
  private applyFont(font: string): void {
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headers.forEach(header => {
      if (header instanceof HTMLElement) {
        header.style.fontFamily = font;
      }
    });
  }

  /**
 * Sets a key-value pair in local storage.
 * @param {string} key - The key for the local storage item.
 * @param {string} value - The value to store in local storage.
 */
  private setLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  /**
 * Retrieves a value from local storage by key.
 * @param {string} key - The key for the local storage item.
 * @returns {string} - The retrieved value, or an empty string if the key doesn't exist.
 */
  private getLocalStorage(key: string): string {
    return localStorage.getItem(key) || "";
  }

  /**
   * Retrieves a value from local storage or returns a fallback value if the key does not exist.
   * @param key - The key to look up in local storage.
   * @param fallback - The fallback value to return if the key does not exist in local storage.
   * @returns {string} - The value from local storage or the fallback value.
   */
  private getStoredOrDefault(key: string, fallback: string): string {
    const stored = this.getLocalStorage(key);
    return stored ? stored : fallback;
  }

  /**
   * Sets the content of the meta tag with name 'theme-color' to the specified color.
   * If the meta tag does not exist, it creates and appends one to the document head.
   *
   * @param {string} color - The color value to set for the theme color meta tag.
   */
  private setThemeColorMetaTag(color: string): void {
    // Query for an existing meta tag with the name 'theme-color'
    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');

    // If the meta tag does not exist, create and append it to the document head
    if (!themeColorMetaTag) {
      themeColorMetaTag = document.createElement('meta');
      themeColorMetaTag.setAttribute('name', 'theme-color');
      document.head.appendChild(themeColorMetaTag);
    }

    // Set the 'content' attribute of the meta tag to the specified color
    themeColorMetaTag.setAttribute('content', color);
  }
}
