import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places = [];
  constructor() { }

  get places() {
    return [...this._places];
  }
}
