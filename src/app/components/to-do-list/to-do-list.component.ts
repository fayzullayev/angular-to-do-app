import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../types/to-do';
import { ToDoListServices } from '../../services/to-do-list-services';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  public todos: ToDo[] = [];

  constructor(private todoService: ToDoListServices) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos;
  }
}
