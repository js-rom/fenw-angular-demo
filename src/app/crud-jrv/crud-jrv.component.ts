import { Component, OnInit } from '@angular/core';
import { List } from './list.model';
import { User } from './user.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-jrv',
  imports: [NgFor, FormsModule],
  templateUrl: './crud-jrv.component.html',
  styleUrl: './crud-jrv.component.css'
})
export class CrudJrvComponent implements OnInit {

  items: List<User> = new List<User>();
  userCreate : User = new User(undefined, undefined);

  ngOnInit(): void {
    this.items.add(new User(1, 'jesus'));
    this.items.add(new User(2, 'alba'));
    this.items.add(new User(3, 'inma'));
  }

  add(user: User) {
    this.items.add(user);
    this.userCreate = new User(undefined, undefined);
  }

  fromUserCreate() : User {
    return new User(Number(this.userCreate.id), this.userCreate.name);
  }

  isValidUser(): boolean {
    return this.userCreate.isValid();
  }

  remove(user: User) {
    this.items.remove(user);
  }

  saveAll() {
    window.alert("Data sent to service for processing")
  }

  readAll(): Array<User> {
    return this.items.readAll();
  }


}
