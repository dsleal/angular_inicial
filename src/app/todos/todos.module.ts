import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosEditComponent } from './todos-edit/todos-edit.component';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';



@NgModule({
  declarations: [TodosListComponent, TodosEditComponent, TodosDetailComponent],
  imports: [
    CommonModule
  ]
})
export class TodosModule { }
