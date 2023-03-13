import { Injectable } from '@angular/core';
import { ToDo } from '../types/to-do';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListServices {
  private todos: ToDo[] = [
    new ToDo('Read a book'),
    new ToDo('Clean the room'),
    new ToDo('Prepare a food'),
  ];

  public todosSubscription = new Subject<ToDo[]>();

  get getTodos(): ToDo[] {
    return this.todos;
  }
}
