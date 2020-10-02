import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ListComponent},
      {path: 'list/:index', component: DetailsComponent}
    ])
    ],
  declarations: [ AppComponent, HelloComponent, ListComponent, DetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
