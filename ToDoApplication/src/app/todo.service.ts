import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoData:any[]; 
  constructor(private localStorageService:LocalStorageService) {
    this.todoData = JSON.parse(this.localStorageService.getItem('todos')!) || [];
   }

  createTask(ob:Todo):boolean{
   if(ob==undefined)
       return false;
   
     this.todoData.push(ob);  
    this.localStorageService.setItem('todos',JSON.stringify(this.todoData));
    this.todoData = JSON.parse(this.localStorageService.getItem('todos')!) || [];
     return true;
  }

  getAllTask(){
    return this.todoData;
  }

  updateTodoStatus(id:number){
    let task= this.todoData.find((task)=>task.id===id);
    if(task.isCompleted==true)
         task.isCompleted=false;
        else
        task.isCompleted=true;


        this.localStorageService.setItem('todos',JSON.stringify(this.todoData));
        this.todoData = JSON.parse(this.localStorageService.getItem('todos')!) || [];
  }

  removeTask(id:number){
    this.todoData = this.todoData.filter((todo)=>todo.id !=id);
    this.localStorageService.setItem('todos',JSON.stringify(this.todoData));
    this.todoData = JSON.parse(this.localStorageService.getItem('todos')!) || [];
  }

}
