import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile works!
    </p>
    
    <a routerLink="/home">Go to Home</a>
  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
