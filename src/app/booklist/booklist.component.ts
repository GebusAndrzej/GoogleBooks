import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router } from '@angular/router';
import { GetbooksService } from '../services/getbooks.service';
import { Bookshelf } from '../class/bookshelf';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private animvar: AnimvariableService,
              private router: Router,
              private getbooksservice: GetbooksService,
              private change: ChangeDetectorRef
              ) { }


    books: Bookshelf = new Bookshelf();

  ngOnInit() {
    this.animvar.navdisplay = 'flex';
    this.getbooks();
  }

  //  get books from service
  public getbooks() {
    //console.log(text);
    this.getbooksservice.getBooks().subscribe(ret => {
      this.books = ret;
    });
  }

  // click on book
  click(id) {
    this.router.navigateByUrl('/book/'+id);
    this.animvar.navdisplay = 'none';
  }


}
