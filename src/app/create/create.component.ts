import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../models/todoModel';
import { TodoService } from '../services/todo.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  // to save form inputs
  todo: ToDoModel;

  constructor(private todoService: TodoService, private toastService: ToastService, private routes: Router) {
    this.todo = new ToDoModel()
  }


  addtask() {
    this.todo.status = "incomplete"; //default 
    this.todoService.insertToDO(this.todo); //add data
    this.toastService.show("Todo Added Successfully", "bg-success"); //show toast
    this.routes.navigate(['todo']); //navigate to todo page
  }
}
