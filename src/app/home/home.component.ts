// ✅ 4. Use routerLink correctly in home.component.ts

import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template:'<h1>Welcome!</h1><a routerLink="/dashboard">Go to Dashboard</a>'
})

export class HomeComponent {}