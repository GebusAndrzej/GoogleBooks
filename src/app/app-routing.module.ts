import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './booklist/booklist.component';
import { BookitemComponent } from './bookitem/bookitem.component';


const routes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'book/:id', component: BookitemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
