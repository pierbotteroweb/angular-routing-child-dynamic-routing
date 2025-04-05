import { Component } from "@angular/core";
import { AuthGuard } from "../auth/auth.guard";
import { Router } from "@angular/router";

@Component({
    selector: 'app-login',
    template:'<h2>Login</h2><button (click)="login()">Login</button>'
})

export class LoginComponent {
    constructor(
        private guard: AuthGuard, 
        private router: Router
    ) {}

    login() {
        this.guard.isLoggedIn = true;
        this.router.navigate(['/dashboard']);
    }
}