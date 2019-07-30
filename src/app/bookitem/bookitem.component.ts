import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GetbooksService } from '../services/getbooks.service';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  constructor(private animvar: AnimvariableService,
              private router: Router,
              private route: ActivatedRoute,
              private getbooksservice: GetbooksService) { }

    ret;

  ngOnInit() {
    this.animvar.navdisplay = 'none';
    const id = this.route.snapshot.paramMap.get('id');
    this.getbook(id);
    this.ret = id;
  }


  public getbook(id) {
    this.getbooksservice.getBook(id).subscribe(ret => {
      this.animvar.book = ret;
    },
    error => {
      this.animvar.ApiKeyLimit = true;
    });
  }




  // back button
  back() {
    this.animvar.navdisplay = 'flex';
    this.router.navigateByUrl('/#' + this.ret);
}


}
