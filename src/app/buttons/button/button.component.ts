import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cxw-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type = 'default';
  @Input() size: 'xs' | 's' | 'm' | 'l' | 'xl' = 's';
  @Input() shape: 'round' | 'square' = 'round';
  @Input() color: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' = 'filled';
  @Input() label: string = 'Label text';
  @Input() icon?: string;

  get classes(): string[] {
    return [
      "button",
      this.type,
      this.size,
      this.shape,
      this.color,
      this.icon ? 'icon' : ''
    ];
  }
}
