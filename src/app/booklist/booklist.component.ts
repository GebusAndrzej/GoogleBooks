import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router } from '@angular/router';
import { GetbooksService } from '../services/getbooks.service';
import { Bookshelf } from '../class/bookshelf';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {

  constructor(private animvar: AnimvariableService,
              private router: Router,
              private getbooksservice: GetbooksService,
              ) { }


  ngOnInit() {
    this.animvar.navdisplay = 'flex';
  }

  //  get books from service    //called from navcomponent
  public getbooks() {

    this.getbooksservice.getBooks().subscribe(ret => {
      this.animvar.books = ret;
      this.animvar.offset = 1;
      window.scroll(0,0);
    });
  }
  public getMoreBooks() {
    this.getbooksservice.getMoreBooks().subscribe(ret => {
      for (let i=0;i<ret.items.length;i++) {
        this.animvar.books.items.push(ret.items[i]);
      }
      this.animvar.offset++;
    });
  }

  // click on book
  click(id) {
    this.router.navigateByUrl('/book/' + id);
    this.animvar.navdisplay = 'none';
  }



}
