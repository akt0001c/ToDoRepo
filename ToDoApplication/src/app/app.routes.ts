import { Routes } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    {path:'',component:TodoListComponent},
    {path:'addTask',component:AddTodoComponent},
    {path:'viewAll',component:TodoListComponent}
];
