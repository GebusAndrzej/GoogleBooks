import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private animvar:AnimvariableService) { }

  ngOnInit() {
    
  }

  anim:boolean=false;
  text=String;


  search(){
    if(this.anim==false){
      this.anim=true;
      this.animvar.navanim="running";
      this.animvar.booklistanim="running";
    }

    //call a function from service to fill booklist

  }

}
