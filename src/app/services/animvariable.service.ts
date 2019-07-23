import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimvariableService {

  constructor() { }

  text:string='marcin';
  navanim:String="paused";
  navdisplay:String="flex";
  booklistanim:String="paused";

}
