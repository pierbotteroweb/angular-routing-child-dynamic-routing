import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  template: `
    <h3>User Detail</h3>
    <p>You're viewing user with ID: {{ userId }}</p>    
    <a routerLink="/dashboard/users">Go to Users</a>
  `,
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  userId: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'))
  }

}
