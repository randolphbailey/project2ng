import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { NewPostComponent } from "./components/newpost/newpost.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { ModeratorComponent } from './components/moderator/moderator.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "recipe", component: RecipeComponent },
  { path: "newpost", component: NewPostComponent },
  { path: "homepage", component: HomeComponent },
  { path: "", component: MainpageComponent },
  { path: "admin", component: AdministratorComponent},
  { path: "mod", component: ModeratorComponent},
  { path: "**", component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
