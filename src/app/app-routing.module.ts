import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from './guards/auth.guard';

// used auth guard to stop unauthorised login
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'todo', canActivate: [AuthGuard], component: TodoComponent, pathMatch: 'full' },
  { path: 'create', canActivate: [AuthGuard], component: CreateComponent, pathMatch: 'full' },
  { path: 'edit', canActivate: [AuthGuard], component: EditComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
