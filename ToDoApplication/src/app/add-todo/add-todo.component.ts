import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
todoForm:FormGroup;
task:Todo;
constructor(private formBuilder:FormBuilder,private  todoService:TodoService) {
  this.todoForm= this.formBuilder.group({
    taskId:[0,Validators.required],
    taskName:['',Validators.required],
  });
  this.task = {} as Todo;
}

onSubmit(){
  console.log(this.todoForm.value);
  let ob= this.todoForm.value;
  this.task={id:ob.taskId,description:ob.taskName ,isCompleted:false};
  let flag= this.todoService.createTask(this.task);
  if(flag==true)
     alert("Task added sucessfully");
    else
     alert('Task cannot be added');
}

}
