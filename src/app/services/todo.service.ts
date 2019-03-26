import { Injectable } from '@angular/core';
import { ToDoModel } from '../models/todoModel';
import { MOCKDATA } from '../models/mockData';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  //to store data
  todoList: ToDoModel[]

  //to store login status
  isLogged:boolean;

  constructor(private routes: Router) {
    // populate our database with mock data
    this.todoList = MOCKDATA;
    this.isLogged = false;
  }


  checkLogin(uname: string, password: string): Observable<boolean> {
    //predefined username and password
    //returns a observable for asyncronous data flow
    if (uname == "tushar@gmail.com" && password == "12345") {
      localStorage.setItem("user", uname);
      this.isLogged = true;
      return of(true);
    }
    else
      return of(false);
  }

  //add data in database
  insertToDO(todo: ToDoModel) {
    this.todoList.push(todo);
  }

  //return whole database
  getToDO(): Observable<ToDoModel[]> {
    return of(this.todoList);
  }

  //find an single object of todo by its index
  getToDoById(index: number) {
    return this.todoList[index];
  }

  //get the index and route it to edit page
  editTask(index: number) {
    this.routes.navigate(['edit'], { queryParams: { index: index } });
  }

  //delete a entry
  deleteTask(index: number) {
    return this.todoList.splice(index, 1);
  }
}
