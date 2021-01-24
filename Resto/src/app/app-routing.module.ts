import { HomeComponent } from './home/home.component';
import { RegisterResturantComponent } from './register-resturant/register-resturant.component';
import { LoginResturantComponent } from './login-resturant/login-resturant.component';
import { ListResturantComponent } from './list-resturant/list-resturant.component';
import { UpdateResturantComponent } from './update-resturant/update-resturant.component';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {component: HomeComponent, path: ""},
  {component: AddResturantComponent, path: "add"},
  {component: UpdateResturantComponent, path: "update/:id"},
  {component: ListResturantComponent, path: "list"},
  {component: LoginResturantComponent, path: "login"},
  {component: RegisterResturantComponent, path: "register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
