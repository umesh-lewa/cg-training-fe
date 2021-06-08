import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { BasketComponent } from './basket/basket.component';
import { ContactbookComponent } from './contactbook/contactbook.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    SummaryComponent,
    BasketComponent,
    ContactbookComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
