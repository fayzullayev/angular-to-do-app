import { Injectable } from '@angular/core';
import { ToDoList } from '../types/to-do-list';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListServices {
  private todos: ToDoList[] = [
    new ToDoList('Read a book'),
    new ToDoList('Clean the room'),
    new ToDoList('Prepare a food'),
  ];

  public todosSubscription = new Subject<ToDoList[]>();

  get getTodos(): ToDoList[] {
    return this.todos;
  }
}
