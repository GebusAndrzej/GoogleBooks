import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  constructor(private animvar:AnimvariableService,private router:Router) { }

  ngOnInit() {
    this.animvar.navanim="running";
  }

  back() {
    this.router.navigateByUrl('/');
};


}
