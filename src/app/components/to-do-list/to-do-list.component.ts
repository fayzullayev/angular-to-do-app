import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../../types/to-do-list';
import { ToDoListServices } from '../../services/to-do-list-services';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public todos: ToDoList[] = [];

  constructor(private todoService: ToDoListServices) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos;
  }
}
