import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ContactbookComponent } from './contactbook/contactbook.component';
import { TodoAppComponent } from './todo-app/todo-app.component';

const routes: Routes = [
 { path:"todo",component: TodoAppComponent},
 { path:"contact",component: ContactbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
