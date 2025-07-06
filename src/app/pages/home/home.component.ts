import { Component } from '@angular/core';
import { SlideshowComponent } from '../../slideshow/slideshow.component';
import { CopyTableService } from '../../services/copy-table.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
import { ButtonComponent } from '../../buttons/button/button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SlideshowComponent, CommonModule, CardComponent, ButtonComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public copyTableService: CopyTableService) { }

  copyableTable1Data = [
    ['John', 'Doe'],
    ['Jane', 'Doe']
  ];

  /**
   * Copies the entire table element to the clipboard.
   * @param table HTMLTableElement to copy
   */
  copyTable(table: HTMLTableElement): void {
    this.copyTableService.copyTable(table);
  }

  /**
   * Copies a specific cell's text to the clipboard.
   * @param text Text to copy to the clipboard
   */
  copyCell(text: string): void {
    this.copyTableService.copyText(text);
  }

}
