import {Component, OnInit} from '@angular/core';
import {TodosService} from "../shared/todos.service";
import {delay} from "rxjs";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  loading: boolean = true
  searchString = ''


  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(500))
      .subscribe(() => {
      this.loading = false
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id)
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todosService.todos, event.previousIndex, event.currentIndex);
  }
}
