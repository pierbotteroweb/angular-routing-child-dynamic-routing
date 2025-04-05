import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <nav>
        <a routerLink="profile">Profile</a><br>
        <a routerLink="settings">Settings</a><br>
        <a routerLink="users">Users</a><br>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
