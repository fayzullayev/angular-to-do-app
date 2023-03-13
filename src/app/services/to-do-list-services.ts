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

  public setDone(id: string): void {
    for (let i = 0; i < this.getTodos.length; i++) {
      if (this.getTodos[i].id === id) {
        this.getTodos[i].done = !this.getTodos[i].done;
      }
    }

    this.todosSubscription.next(this.todos);
  }
}
