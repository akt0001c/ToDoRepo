import { Component, Input, Output, output } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input() task:Todo={} as Todo;
  @Output() updateFlag= new EventEmitter<any>();
  @Output()  removeFlag= new EventEmitter<any>();
  constructor(private todoservices:TodoService){
  }


  updateStatus(id:number){
    this.todoservices.updateTodoStatus(id);
    
    alert("Status updated successfully");
    this.updateFlag.emit(true);
  }
  removeTask(id:number){
    this.todoservices.removeTask(id);
    alert('Task removed successfully');
    this.removeFlag.emit(true);
  }
}
