import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NewPostComponent } from "./components/newpost/newpost.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { MainpageComponent } from './components/mainpage/mainpage.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "newpost", component: NewPostComponent },
  { path: "recipe", component: RecipeComponent },
  { path: "homepage", component: HomeComponent },
  { path: "mainpage", component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
