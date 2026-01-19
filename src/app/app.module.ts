import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule}from '@angular/material/button';
import {MatSnackBarModule}from '@angular/material/snack-bar';
import {MatIconModule}from '@angular/material/icon';
import {MatDialogModule}from '@angular/material/dialog';
import {MatCardModule}from '@angular/material/card';
import {MatDividerModule}from '@angular/material/divider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './shared/component/navbar/navbar.component';

import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import { MovieFormComponent } from './shared/component/movie-form/movie-form.component';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
  
    MovieDashboardComponent,
    MovieFormComponent,
    MovieCardComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatCardModule,
    MatDividerModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
