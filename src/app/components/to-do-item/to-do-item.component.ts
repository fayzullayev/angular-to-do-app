import { Component, Input } from '@angular/core';
import { ToDo } from '../../types/to-do';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent {
  @Input() todo: ToDo;
  @Input() num: number;

  setDone(checked: boolean): void {
    console.log(checked);
  }
}
