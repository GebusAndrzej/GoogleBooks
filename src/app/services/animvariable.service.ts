import { Injectable } from '@angular/core';
import { Bookshelf, Item } from '../class/bookshelf';

@Injectable({
  providedIn: 'root'
})
export class AnimvariableService {

  constructor() { }

  text = 'marcin';
  navanim = 'paused';
  navdisplay = 'flex';
  booklistanim = 'paused';
  books: Bookshelf = new Bookshelf();
  book: Item = new Item();
  offset : number;

}
