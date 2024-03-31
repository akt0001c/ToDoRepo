import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
 todolist:Todo[];
 constructor(private todoService:TodoService){
  this.todolist = todoService.getAllTask();
 }

 onUpdateTodo(ob:any){
  this.todolist=this.todoService.getAllTask();
  console.log("testing of update action");
 }

 onRemoveTodo(ob:any){
  this.todolist=this.todoService.getAllTask();
 }

}
