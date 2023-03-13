import { v4 as uuidv4 } from 'uuid';

export class ToDoList {
  public id: string;
  private done: boolean;

  constructor(private name: string) {
    this.id = uuidv4();
    this.done = false;
  }
}
