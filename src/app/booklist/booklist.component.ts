import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private animvar:AnimvariableService,private router:Router) { }

  ngOnInit() {
  }

  click(){
    this.router.navigateByUrl('/book/id');
    this.animvar.booklistanim='running';
  }

}
