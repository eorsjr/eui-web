import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cxw-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() variant: 'elevated' | 'filled' | 'outlined' = 'elevated';
  
  @HostBinding('class') get hostClass() {
    return this.variant;
  }
}
