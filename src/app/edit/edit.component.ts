import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../models/todoModel';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';
import {filter} from 'rxjs/operators';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  todo:ToDoModel;
  constructor(private routes:ActivatedRoute,
    private todoService:TodoService,
    private toastService:ToastService,
    private router:Router
    ) {
    this.todo = new ToDoModel();
   }

  ngOnInit() {
    if (window.location.search !== '') {
      this.routes.queryParams.pipe(
      filter(params => params.index)) //find the index
      .subscribe(params => {
      var paramIndex = params.index; //save the index
      this.todo = this.todoService.getToDoById(paramIndex); //fetch data from that index
    });
  }
  }

  updateTask()
  {
    // angular updates the values in array automatically as we change the data 
    this.toastService.show("Updated Successfully","bg-warning text-dark"); //show toast
    this.router.navigate(['todo']) //navigate to todo
  }
}
