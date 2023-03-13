import { v4 as uuidV4 } from 'uuid';

export class ToDo {
  public id: string;
  public done: boolean;

  constructor(public name: string) {
    this.id = uuidV4();
    this.done = false;
  }
}
