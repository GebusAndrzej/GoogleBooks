import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private animvar:AnimvariableService) { }

  ngOnInit() {
  }

  click(){
    console.log('click');
  }

}
