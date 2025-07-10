import { Component, Input } from '@angular/core';

@Component({
  selector: 'cxw-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})
export class IconButtonComponent {
  @Input() type = 'default';
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 's';
  @Input() shape: 'round' | 'square' = 'round';
  @Input() width: 'narrow-width' | 'default-width' | 'wide-width' = 'default-width';
  @Input() color: 'filled' | 'tonal' | 'outlined' | 'standard' = 'filled';
  @Input() icon: string = 'grid_guides';

  get classes(): string[] {
    return [
      "icon-button",
      this.type,
      this.size,
      this.shape,
      this.width,
      this.color,
      this.icon ? 'icon' : ''
    ];
  }
}
