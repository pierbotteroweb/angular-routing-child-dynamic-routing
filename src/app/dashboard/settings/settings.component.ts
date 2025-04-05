import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <p>
      settings works!
    </p>
    
    <a routerLink="/home">Go to Home</a>
  `,
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
