import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  add(msg: string): void {
    this.messages.push(msg);
  }

  clear(): void {
    this.messages = ["I've got a hero"];
  }

}
