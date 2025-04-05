// 🛡️ 1. Route Guard (auth.guard.ts)

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    isLoggedIn = false

    constructor(private router: Router) {}

    canActivate(): boolean {
        if (this.isLoggedIn) return true;
        this.router.navigate(['/login']);
        return false
    }
}