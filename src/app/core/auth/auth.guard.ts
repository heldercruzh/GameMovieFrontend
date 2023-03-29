import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanLoad, Route } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
 
  constructor(
    private router: Router, 
    private authService: AuthService, 
    private tokenStorageService: TokenStorageService) { }

  canLoad(route: Route): boolean {    
     
    if (this.tokenStorageService.getUser()) { 
        return true;
    }
     
    this.router.navigate(['/auth']);
    return false;
  }

}
