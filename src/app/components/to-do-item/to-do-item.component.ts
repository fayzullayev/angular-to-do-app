import { Component, Input } from '@angular/core';
import { ToDo } from '../../types/to-do';
import { ToDoListServices } from '../../services/to-do-list-services';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  @Input() todo: ToDo;
  @Input() num: number;

  constructor(private todosService: ToDoListServices) {}

  setDone(checked: boolean): void {
    this.todosService.setDone(this.todo.id);
  }
}
