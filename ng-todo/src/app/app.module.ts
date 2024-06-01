import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoFormComponent } from './todo-form/todo-form.component';
import {FormsModule} from '@angular/forms';
import {TodosFilterPipe} from "./shared/todos-filter.pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        DragDropModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
