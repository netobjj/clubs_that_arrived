import { Injectable } from '@angular/core';
import io from "socket.io-client";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  constructor() { 
    this.socket = io("http://localhost:3000")
  }

  listen(Eventname: string) {
    return new Observable((subscriber) => {
      this.socket.on(Eventname, (data) => {
        subscriber.next(data);
      })
    })
  }
}
