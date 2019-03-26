import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO-App';
  constructor(public todoService:TodoService,private routes:Router){}

  logout()
  {
      this.todoService.isLogged = false; //change to false
      localStorage.clear(); //clears the localstorage
      this.routes.navigate(['login']); //navigate to login
  }
}
