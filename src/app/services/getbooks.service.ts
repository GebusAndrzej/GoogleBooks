import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Bookshelf, Item } from '../class/bookshelf';
import { Observable } from 'rxjs';
import { AnimvariableService } from './animvariable.service';

@Injectable({
  providedIn: 'root'
})
export class GetbooksService {
  text: string;

  constructor(private http: HttpClient,
              private animvar: AnimvariableService) { }

  private url = 'https://www.googleapis.com/books/v1/volumes/';


  getBooks(): Observable<Bookshelf> {
    const param = new HttpParams().set('q', this.text);
    return this.http.get<Bookshelf>('https://www.googleapis.com/books/v1/volumes/', {params: param});
  }

  getMoreBooks():Observable<Bookshelf> {
    const param = new HttpParams()
    .set('q', this.text)
    .set('startIndex', (this.animvar.offset * 10) + 1 + '');
    return this.http.get<Bookshelf>('https://www.googleapis.com/books/v1/volumes/', {params: param});
  }

  getBook(id): Observable<Item> {
    return this.http.get<Item>('https://www.googleapis.com/books/v1/volumes/' + id);
  }

}
