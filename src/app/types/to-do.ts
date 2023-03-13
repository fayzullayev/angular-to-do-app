import { v4 as uuidv4 } from 'uuid';

export class ToDo {
  public id: string;
  private done: boolean;

  constructor(public name: string) {
    this.id = uuidv4();
    this.done = false;
  }
}
