import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrimService {

  constructor() { }

  public isVisible = signal(false); // Signal to track whether the scrim is visible
  public zIndex = signal(1); // Signal to store the current z-index of the scrim


  /**
   * Sets the z-index of the scrim.
   * @param value The z-index value to set.
   */
  public setZIndex(value: number) {
    this.zIndex.set(value);
  }
}