import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyTableService {

  constructor() { }
  /**
   * Copies the given text to the clipboard.
   * @param text Text to copy to the clipboard
   */
  copyText(text: string): void {
    navigator.clipboard.writeText(text);
  }
  /**
   * Copies the content of the given HTML table element to the clipboard.
   * @param table HTMLTableElement to copy
   */
  copyTable(table: HTMLTableElement): void {
    let tableText = '';
    for (const row of Array.from(table.rows)) {
      const rowText = Array.from(row.cells)
        .map(cell => cell.innerText.trim())
        .join('\t');
      tableText += rowText + '\n';
    }
    this.copyText(tableText);
  }
}
