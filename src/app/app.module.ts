import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewPostComponent } from "./components/newpost/newpost.component";
import { ControlMessagesComponent } from "src/app/components/register/control-messages.component";
import { RecipeComponent } from "./components/recipe/recipe.component";
import { PoststructureComponent } from "./components/poststructure/poststructure.component";
import { MainpageComponent } from "./components/mainpage/mainpage.component";
import { AdministratorComponent } from "./components/administrator/administrator.component";
import { ModeratorComponent } from "./components/moderator/moderator.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { NewcommentComponent } from './components/newcomment/newcomment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewPostComponent,
    ControlMessagesComponent,
    RecipeComponent,
    PoststructureComponent,
    MainpageComponent,
    AdministratorComponent,
    ModeratorComponent,
    CommentsComponent,
    NewcommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
