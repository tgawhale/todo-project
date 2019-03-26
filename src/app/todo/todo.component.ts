import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../models/todoModel';
import { TodoService } from '../services/todo.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ToDoModel[];
  constructor(private todoService: TodoService,private toastService:ToastService) {
    this.todoList = []
  }

  ngOnInit() {

    //get the data from service
    this.todoService.getToDO().subscribe(
      result=>{
        this.todoList = result; //store it
      },error=>{
        this.toastService.show("Could Not Fetch data","bg-danger"); //if error occurred while fetching
      },()=>{
        this.toastService.show("Data Loaded Successfully","bg-success"); //after successfully fetch , will show toast
      } 
    )
  }

  delete(index: number) {
    var ans = confirm("Are You Sure You want To delete?")
    if (ans) {
      this.todoService.deleteTask(index); //delete from service
      this.toastService.show("Todo Deleted Successfully","bg-danger") //show toast
    }
  }

  edit(index:number)
  {
    var ans = confirm("Do You Want to Edit?")
    if(ans)
    {
      this.todoService.editTask(index); //will route to edit
    }
  }
}
