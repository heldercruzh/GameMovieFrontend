import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './core/auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  isLoggedIn = false;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router) { } 

  ngOnInit(): void {
    if(!!this.tokenStorageService.getUser()){
      this.isLoggedIn = true;
      this.router.navigate([''])
    }
  }

}
