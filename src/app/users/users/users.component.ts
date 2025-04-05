import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <h2>Users</h2>
    <ul>
        <li *ngFor="let user of users" [routerLink]="['/users', user.id]" >
            {{ user.name }}
        </li>
    </ul>
    <a routerLink="/home">Go to Home</a>

  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
