import { Injectable } from '@angular/core';
import { farjiData } from './farji-data';
import { Suchi } from './types';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor() { }

  getListings(): Suchi[]{
    return farjiData;
  }
}
