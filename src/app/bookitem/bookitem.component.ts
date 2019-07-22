import { Component, OnInit } from '@angular/core';
import { AnimvariableService } from '../services/animvariable.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {

  constructor(private animvar:AnimvariableService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.animvar.navanim='running';

    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }







  // back button
  back() {
    this.router.navigateByUrl('/');
};


}
