import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Bookshelf, Item } from '../class/bookshelf';
import { Observable, throwError } from 'rxjs';
import { AnimvariableService } from './animvariable.service';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetbooksService {
  text: string;

  constructor(private http: HttpClient,
              private animvar: AnimvariableService) { }

  private url = 'https://www.googleapis.com/books/v1/volumes/';


  getBooks(): Observable<Bookshelf> {
    this.animvar.ApiKeyLimit = false;
    const param = new HttpParams().set('q', this.text);
    return this.http.get<Bookshelf>('https://www.googleapis.com/books/v1/volumes/', {params: param})
                    .pipe(catchError(this.errorHandler));
  }

  getMoreBooks(): Observable<Bookshelf> {
    this.animvar.ApiKeyLimit = false;
    const param = new HttpParams()
    .set('q', this.text)
    .set('startIndex', (this.animvar.offset * 10) + 1 + '');

    return this.http.get<Bookshelf>('https://www.googleapis.com/books/v1/volumes/', {params: param})
                    .pipe(catchError(this.errorHandler));
  }

  getBook(id): Observable<Item> {
    this.animvar.ApiKeyLimit = false;
    return this.http.get<Item>('https://www.googleapis.com/books/v1/volumes/' + id)
                    .pipe(catchError(this.errorHandler));
  }




  errorHandler(error: HttpErrorResponse) {
    return error.status === 403 ? throwError(true) : throwError(false);
  }

}
