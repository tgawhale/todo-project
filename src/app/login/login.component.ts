import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string
  password: string
  constructor(private todoService: TodoService, private toastService: ToastService, private routes: Router) {
    this.userName = ""
    this.password = ""
  }

  ngOnInit() {
  }

  login() {

    //returns a observables from service
    //used for asyncronous calling
    this.todoService.checkLogin(this.userName, this.password).subscribe(
      isValid => {
        if (isValid) {
          this.routes.navigate(['todo']) //route is credentials are right
        }
        else {
          this.toastService.show("Invalid Credentials", "bg-danger"); //show toast if invalid
        }
      }
    );
  }

}
