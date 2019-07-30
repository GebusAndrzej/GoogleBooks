import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { GetbooksService } from '../services/getbooks.service';
import { BooklistComponent } from '../booklist/booklist.component';

@Component({
  providers: [BooklistComponent ],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  constructor(public animvar: AnimvariableService,
              public getbooksservice: GetbooksService,
              public booklist: BooklistComponent) { }

  anim: boolean = false;
  public text: string = '';

  ngOnInit() {
    
  }


  search(){
    if (this.anim == false){
      this.anim = true;
      this.animvar.navanim = 'running';
      this.animvar.booklistanim = 'running';
    }

    // call a function in booklist component
    this.getbooksservice.text = this.text;
    this.booklist.getbooks();
  }

}
