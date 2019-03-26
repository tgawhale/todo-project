import { Injectable } from '@angular/core';

//class to store messages object
export class Message {
  message: string;
  className: string;

  constructor(message: string, className: string) {
    this.message = message;
    this.className = className;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  messageArr: Message[];

  constructor() {
    this.messageArr = [];
  }

  //called for adding message
  show(message: string, className: string) {

    //adds the data
    this.messageArr.push(new Message(message, className))

    //deletes the data after 2 seconds from first index 
    setTimeout(() => {
      this.messageArr.shift();
    }, 2000);
  }
}
