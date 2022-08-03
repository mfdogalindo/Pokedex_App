import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Promise<boolean> {
    return new Promise(async (resolve) => {
      let isValid = await this.authService.validateToken();
      if(!isValid) {
        this.router.navigate(['/login']);
      }
      resolve(isValid);
    });
  }
}
